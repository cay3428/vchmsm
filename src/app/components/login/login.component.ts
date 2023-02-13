import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
 import { ToastrService } from 'ngx-toastr';
 import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
   
      let loginModel = Object.assign({},this.loginForm.value)
      console.log,(loginModel)
      this.authService.login(loginModel).subscribe(response=>{
        console.log,(response)
        this.toastrService.info(response.expiration)
        localStorage.setItem("token",response.token)
        window.location.replace('') 
        
       
      },responseError=>{
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }
  }

}
