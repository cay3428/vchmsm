import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44314/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }
  
  delete(productId:number):Observable<ResponseModel>{
    let newPath = this.apiUrl + 'products/delete?productId=';
    
   return  this.httpClient.get<ResponseModel>(newPath+productId);
  }

 getbyid(productId:number) : Observable<ListResponseModel<Product>> {
  let newPath = this.apiUrl + 'products/getbyid?productId=' + productId;
  return this.httpClient.get<ListResponseModel<Product>>(newPath);
}

update(product:Product):Observable<ResponseModel>{
  let newPath = this.apiUrl + 'products/update?prodcutId=';
  return this.httpClient.post<ResponseModel>(newPath, product );
}

 
}
