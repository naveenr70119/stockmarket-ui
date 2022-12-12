import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Company } from '../model/company';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = "http://localhost:9080/api/v1/company/";

// baseUrl = "http://ec2-13-112-243-172.ap-northeast-1.compute.amazonaws.com:9080/api/v1/company/";

  constructor(private httpClient: HttpClient) { }

  getCompanyList(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.baseUrl}getall`)

  }

  createCompany(company: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}register`, company).pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);
        return throwError(err);    //Rethrow it back to component
      })
    )
    //   catchError((err) => {
    //     if (err.status == 304) {
    //       return throwError(err);
    //     }

    //   })
      
    // );

  }

  getCompanyByCode(code: string): Observable<Company> {
    return this.httpClient.get<Company>(`${this.baseUrl}info/${code}`)
  }

  deletecompanyBycode(code: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}delete/${code}`)
  }

  getCompanyListWithPrice(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.baseUrl}getcompanies`)

  }

  updateCompany(company: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}update`, company);

  }
}
