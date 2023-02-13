import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Sales } from '../models/sales';

@Injectable({
    providedIn: 'root'
  })
  export class SalesService {
  
    apiUrl = 'https://localhost:44314/api/';
    constructor(private httpClient: HttpClient) { }


    getall():Observable<ListResponseModel<Sales>> {
        let newPath = this.apiUrl + "sales/getall"
        return this.httpClient.get<ListResponseModel<Sales>>(newPath);
      }


      getbysid(salesId: number): Observable<SingleResponseModel<Sales>> {
        let newPath = this.apiUrl + ' sales/getbysid?salesId=' + salesId;
        return this.httpClient.get<SingleResponseModel<Sales>>(newPath);
    
      }
          

      bysid(salesId: number): Observable<ListResponseModel<Sales>> {
        let newPath = this.apiUrl + 'sales/getbysid?salesId=' + salesId;
        return this.httpClient.get<ListResponseModel<Sales>>(newPath);
    
      }
          

 
      delete(salesId:number):Observable<ResponseModel>{
        let newPath = this.apiUrl + 'sales/delete?salesId=';
        
       return  this.httpClient.get<ResponseModel>(newPath+salesId);
      }
    
      
  add(sales:Sales):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"sales/add",sales)
  }
    
 
  update(sales:Sales):Observable<ResponseModel>{
    let newPath = this.apiUrl + 'sales/update?salesId=';
    return this.httpClient.post<ResponseModel>(newPath, sales );
  }
  




  }