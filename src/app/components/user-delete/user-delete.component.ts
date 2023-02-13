import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
 import { Users } from 'src/app/models/Users';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  users: Users[] = [];
  dataLoaded = false;
  deleteUserForm:FormGroup;
  user :Users 
  Id :number;

  constructor(private formbuilder:FormBuilder, private authService:AuthService,private toastrService:ToastrService) { }
  ngOnInit(){
    this.deleteUserForm=this.formbuilder.group({
      Id:["", Validators.required],
 
  
  
    });
 
    this.getbyid(this.Id)
  }

  onFormSubmit(){
    this.dataLoaded=false;
    let user=this.deleteUserForm.value;
     
    this.deleteUserForm.reset();
  }





getUsers() {
  this.authService.getusers().subscribe(response=>{
    this.users = response.data
    console.log(this.users);
    this.dataLoaded = true;
  })   
}

getbyid(Id:number) {
  this.authService.UserById(Id).subscribe(response=>{
    this.users = response.data
    this.dataLoaded = true;
  })   
}

  
  
 delete(){
 



  var user = Object.assign({},this.deleteUserForm.value)

 
  if(this.deleteUserForm.valid)
  {
  
  this.authService.delete(Number(user.Id))
  .subscribe(response=>{ this.toastrService.success(response.message,"Kayıt Silindi")
  }
  
  

  
  )}
else { this.toastrService.error("bu kişi yok")}








}





} 
 

 





