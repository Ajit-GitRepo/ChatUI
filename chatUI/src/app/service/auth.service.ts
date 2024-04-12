import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }

  createUser(data:any):Observable<any>{
  const url= "http://localhost:8080/user/create";
  return this.http.post<any>(url, data);
}

authUser(data:any){
  const url= "http://localhost:8080/user/login";
  return this.http.post<any>(url,data);
}

getUserProfile(mobileNumber:number){
  const url= "http://localhost:8080/user/profile";
  const params = new HttpParams().set('mobileNumber', mobileNumber.toString());

    // Make the GET request with the query parameters
    return this.http.get<any>(url, { params: params });

}

check(){
  console.log("hey Im working!")
}
}
