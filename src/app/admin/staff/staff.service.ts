import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userr } from "src/app/admin/staff/staff.model"
import { Role } from 'src/app/admin/staff/roles'

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private url = 'http://localhost:8082/User'

  constructor(private http: HttpClient ) {}

  addStaff(firstName: string, lastName : string, role: Role[], username: string, password: string, email: string): Observable<Userr[]> {
   
    const body = {
      firstName: firstName,
      lastName: lastName,
      role:role,
      username: username,
      password: password,
      email: email
    };
    return this.http.post<Userr[]>(this.url, body);
  }
}
