import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { TokenModel } from '../models/tokenModel';
import { Users } from '../models/Users';
import { UserOperationClaims} from '../models/UserOperationClaims';

 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44314/api/auth/';
  constructor(private httpClient:HttpClient) { }
  
  login(loginModel:LoginModel){
    return this.httpClient.post<TokenModel>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
  GetUserById(Id: number): Observable<SingleResponseModel<Users>> {
    let newPath = this.apiUrl + 'GetUserById?Id=' + Id;
    return this.httpClient.get<SingleResponseModel<Users>>(newPath);

  }
  GetByAuthId(Id: number): Observable<SingleResponseModel<UserOperationClaims>> {
    let newPath = this.apiUrl + 'GetByAuthId?Id=' + Id;
    return this.httpClient.get<SingleResponseModel<UserOperationClaims>>(newPath);

  }

  UserById(Id: number): Observable<ListResponseModel<Users>> {
    let newPath = this.apiUrl + 'GetUserById?Id=' + Id;
    return this.httpClient.get<ListResponseModel<Users>>(newPath);

  }

  

  operationupdate(userOperationClaims:UserOperationClaims): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'operationupdate';
    console.log(userOperationClaims)
    return this.httpClient.post<ResponseModel>(newPath, userOperationClaims);
  }

  

  update(user:Users): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<ResponseModel>(newPath, user);
  }

 

  add(user:Users):Observable<ResponseModel>{

    return this.httpClient.post<ResponseModel>(this.apiUrl+"register",user)
  }
 
  
  getusers():Observable<ListResponseModel<Users>> {
    let newPath = this.apiUrl + "getusers"
    return this.httpClient.get<ListResponseModel<Users>>(newPath);
  }




 
  delete(Id:number):Observable<ResponseModel>{
    let newPath = this.apiUrl + 'delete?Id=';
    
   return  this.httpClient.get<ResponseModel>(newPath+Id);
  }







}

