import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  baseUrl = "http://localhost:9080/api/v1/user/";

 //baseUrl = "http://ec2-13-112-243-172.ap-northeast-1.compute.amazonaws.com:9080/api/v1/user/";

  constructor(private httpClient: HttpClient) { }

  
  
  login(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}login`, user).pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);
        return throwError(err);    //Rethrow it back to component
      })
    )

  }
}
