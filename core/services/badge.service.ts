import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Badge} from "../model/badge";
import {API_URL} from "../../config/api";

@Injectable({
  providedIn: "root"
})
export class BadgeService {
  constructor(private _http: HttpClient) {
  }

  getAllBadges(): Observable<Badge[]> {
    return this._http.get<Badge[]>(`${API_URL}/badges`);
  }
}
