import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {
  protected http: HttpClient
  constructor(http: HttpClient) {
    this.http=http
   }
  apiUrl='http://localhost:8082/consultations/allConsultation'
  getUser(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

  deleteappointement(id: number): Observable<any> {
    const apiUrl = 'http://localhost:8082/consultations/${id}';
    return this.http.delete<any>(apiUrl);
  }

}
