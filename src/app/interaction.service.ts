import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private apiUrl = 'http://localhost:8085/interaction'; // Replace with your backend API URL


  constructor(private http: HttpClient) { }

  getInteraction(userId: number,formId : number): Observable<any[]> {
    const url = `${this.apiUrl}/get/${userId}/${formId}`;
    return this.http.get<any[]>(url);
    }

    likePost(userId: any, formId : number): Observable<any> {
      const url = `${this.apiUrl}/${userId}/${formId}`;
      const body = {}
      return this.http.post<any>(url,body);
  }

  dislike(userId: any, formId : number): Observable<any> {
    const url = `${this.apiUrl}/dislike/${userId}/${formId}`;
    const body = {}
    return this.http.post<any>(url,body);
}

    
}
