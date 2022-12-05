import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl="http://localhost:9080/api/v1/company/";

  constructor(private httpClient:HttpClient) { }

  getCompanyList():Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${this.baseUrl}getall`)

  }

  createCompany(company:Company):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}register`,company);
  }

  getCompanyByCode(code:string):Observable<Company>{
    return this.httpClient.get<Company>(`${this.baseUrl}info/${code}`)
  }

  deletecompanyBycode(code:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}delete/${code}`)
  }

  getCompanyListWithPrice():Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${this.baseUrl}getcompanies`)

  }
}
