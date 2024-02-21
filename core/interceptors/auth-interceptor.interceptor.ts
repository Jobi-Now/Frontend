import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorage} from "../services/token-storage.service";

@Injectable()
export class authInterceptorInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorage) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: HttpHeaders;
    const token: string | null = this.tokenStorage.getAccessToken();

    if (token != null && !request.url.includes("auth")) headers = new HttpHeaders()
      .set('ngrok-skip-browser-warning', 'true')
      .append('Authorization', `Bearer ${token}`);

    else headers =
      new HttpHeaders()
        .set('ngrok-skip-browser-warning', 'true');

    const authReq: HttpRequest<any> = request.clone({
      headers: headers
    });

    return next.handle(authReq);
  }

}
