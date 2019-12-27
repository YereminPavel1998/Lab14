import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';
import { HttpHeaders,  HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService extends BaseApi{
  header: HttpHeaders;
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.header = new HttpHeaders({ 'Content-Type': 'application/json' });
   }

  async getData(url){
    return await this.get(url, this.header).toPromise();
  }
  postData(url, data){
   return this.post(url, data, this.header).toPromise();
 }
  putData(url, id: number, data){
   return this.put(`${url}/${id}`, data, this.header).toPromise();
 }
 deleteData(url, id: number){
   return this.delete(`${url}/${id}`, this.header).toPromise();
 }
}


