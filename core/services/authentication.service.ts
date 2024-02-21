import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {TokenStorage} from './token-storage.service';
import {RegisterRequest} from '../model/register-request';
import {AuthenticationResponse} from '../model/authentication-response';
import {LoginRequest} from "../model/login-request";
import {catchError, map} from 'rxjs/operators';
import {RoutingService} from "./routing.service";
import {API_URL} from '../../config/api';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorage, private router: RoutingService) {
  }

  register(request: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      `${API_URL}/register`,
      request
    );
  }

  authenticate(request: LoginRequest) {
    return new Promise<boolean>((resolve, reject) => {
      this.http
        .post<AuthenticationResponse>(`${API_URL}/auth/authenticate`, request)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error)
            reject(error);
            return throwError(error);
          })
        )
        .subscribe((token) => {
          this.tokenStorage.setToken(token);
          resolve(true);
        });
    });
  }

  getRoles(): string[] {
    return this.tokenStorage.getRoles();
  }

  getPermissions(): string[] {
    return this.tokenStorage.getPermissions();
  }

  refreshToken() {
    this.http
      .post<void>(`${API_URL}/auth/refresh-token`, {},
        {
          headers: {
            Authorization: `Bearer ${this.tokenStorage.getRefreshToken()}`
          }
        }
      )
      .subscribe((token) => this.tokenStorage.setToken(token));
  }

  isAuthenticated(): Promise<boolean> {
    const token = this.tokenStorage.getAccessToken();
    if (!token) {
      return Promise.resolve(false);
    }
    return new Promise<boolean>((resolve, reject) => {
      this.http.post(`${API_URL}/auth/check-token`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            reject(error);
            return throwError(error);
          })
        )
        .subscribe((res) => {
          resolve(true);
        });
    });
  }

  getOauthGoogleUrl(): Observable<string> {
    return this.http.get<string>(`${API_URL}/Oauth/url`)
      .pipe(
        map((data: any) => data.authURL)
      );
  }

  OauthGoogleAuthenticate(code: string) {
    return new Promise<boolean>((resolve, reject) => {
      this.http
        .get<AuthenticationResponse>(`${API_URL}/Oauth/callback?code=${code}`)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error)
            reject(error);
            return throwError(error);
          })).subscribe((token: AuthenticationResponse) => {
        this.tokenStorage.setToken(token);
        this.router.navigateTo('/user/profile');
        resolve(true);
      });
    });
  }

  getCurrentAuthenticatedUser(): Observable<User> {
    return this.http
      .get<User>(`${API_URL}/user/current`);
  }

  logout(): void {
    this.http
      .get<void>(`${API_URL}/auth/logout`)
      .subscribe(() => {
        this.tokenStorage.clear();
        this.router.navigateTo('/login');
      });
  }
}
