import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Option} from "../model/option";
import {Observable} from "rxjs";
import {Answer} from "../model/answer";
import {API_URL} from "../../config/api";

@Injectable({
  providedIn: "root"
})
export class AnswerService {
  constructor(private _http: HttpClient) {
  }

  setAnswer(options: Option[]): Observable<Answer> {
    return this._http.post<Answer>(`${API_URL}/answer`, options);
  }
}
