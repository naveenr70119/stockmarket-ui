import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl="http://localhost:9081/api/v1/stock/"

  constructor(private httpClient:HttpClient) { }

  getByCode(code:string):Observable<Stock>{
    return this.httpClient.get<Stock>(`${this.baseUrl}get/${code}`)
  }
  getById(id:number,):Observable<Stock>{
    return this.httpClient.get<Stock>(`${this.baseUrl}${id}`)
  }

  getStockList(code:string):Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(`${this.baseUrl}getall/${code}`)

  }

  createStock(stock:Stock):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}add/${stock.code}`,stock);
  }

  deleteStockById(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}delete/${id}`)
  }

  deleteStockByCode(code:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}deleteall/${code}`)
  }

  getStockListByDates(code:string,startdate:Date,enddate:Date):Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(`${this.baseUrl}get/${code}/${startdate}/${enddate}`)

  }
}
