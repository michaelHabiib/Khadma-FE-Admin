import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registeration } from '../interfaces/RegistrationCode';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'http://example.com';
  constructor(private http : HttpClient){}

  getAllUsers(pageNo : number = 1, pageSize : number = 10):Observable<registeration>{
    return this.http.get<registeration>(`${this.baseUrl}/api/SecurityBMD/Users/UserLogin`)
  }
  DeleteUsers(userId : number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/api/delete/${userId}`)
  }
}
