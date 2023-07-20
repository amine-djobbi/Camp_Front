import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forum } from '../models/forum';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8085/forum'; // Replace with your backend API URL


  constructor(private http: HttpClient) { }

  createForum(userId: any,forum: Forum): Observable<Forum> {
    return this.http.post<Forum>(`${this.apiUrl}/add/${userId}`, forum);
  }

 
}
