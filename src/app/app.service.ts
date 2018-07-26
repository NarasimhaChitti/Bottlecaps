import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private httpclient:HttpClient) { }
  getProductslist(object){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpclient.post<any>('https://staging.liquorapps.com/Bcapi/api/Product/ProductGetList',object,{headers:headers});
    }
}
