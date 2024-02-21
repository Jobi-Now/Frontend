import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../model/quiz';
import { API_URL } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  /**
   * get all resources
   */
  getAllQuizes(): Observable<Quiz[]> { 
    return this.http.get<Quiz[]>(`${API_URL}/quiz`);
  }
  
  /**
   * get a specific resource
   */
  getQuiz(id: string): Observable<Quiz> {
    return this.http.get<Quiz>(`${API_URL}/quiz/${id}`);
  }
}
