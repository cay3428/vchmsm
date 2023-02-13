import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';

@Injectable({
    providedIn: 'root'
  })
  export class CustomerService {
  
    apiUrl = 'https://localhost:44314/api/';
    constructor(private httpClient: HttpClient) { }


    getall():Observable<ListResponseModel<Customer>> {
        let newPath = this.apiUrl + "customers/getall"
        return this.httpClient.get<ListResponseModel<Customer>>(newPath);
      }


      getbyid(customerId: number): Observable<SingleResponseModel<Customer>> {
        let newPath = this.apiUrl + ' customers/getbyid?customerId=' + customerId;
        return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
    
      }
          

      getid(customerId: number): Observable<ListResponseModel<Customer>> {
        let newPath = this.apiUrl + 'customers/getbyid?customerId=' + customerId;
        return this.httpClient.get<ListResponseModel<Customer>>(newPath);
    
      }
          

 
      delete(customerId:number):Observable<ResponseModel>{
        let newPath = this.apiUrl + 'customers/delete?customerId=';
        
       return  this.httpClient.get<ResponseModel>(newPath+customerId);
      }
    
      
  add(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"customers/add",customer)
  }
    
 
  update(customer:Customer):Observable<ResponseModel>{
    let newPath = this.apiUrl + 'customers/update?customerId=';
    return this.httpClient.post<ResponseModel>(newPath, customer );
  }
  




  }