import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent implements OnInit {

userAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private authService:AuthService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm(){
     this.userAddForm = this.formBuilder.group({
        id:["", Validators.required],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
     })
  }

  add(){
    if(this.userAddForm.valid){
      let userModel = Object.assign({},this.userAddForm.value)
      this.authService.add(userModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  }

}