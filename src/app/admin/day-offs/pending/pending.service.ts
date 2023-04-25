import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pending } from "./pending.model"

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  private url = 'http://localhost:8082/api/day-offs/'
  constructor(private http: HttpClient ) { }


  getAllDayOffs(): Observable<Pending[]>{
    return this.http.get<Pending[]>(this.url)
  }

  getPendingDayOffRequests(): Observable<Pending[]>{
    return this.http.get<Pending[]>(this.url+'pending')
  }

}
