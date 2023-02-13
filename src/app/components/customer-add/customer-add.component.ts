import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';
 

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private customerService:CustomerService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }

  createCustomerAddForm(){
     this.customerAddForm = this.formBuilder.group({
 customerId : [,Validators.required],
  customerName : ["",Validators.required],
  companyName : ["",Validators.required],
  city: ["",Validators.required],
  region : ["",Validators.required], 
  contatcTitle : ["",Validators.required],
  address : ["",Validators.required],
  email : ["",Validators.required],
 country : ["",Validators.required],
phone : [,Validators.required],
fax : [,Validators.required],
 


       
        
     })
  }

  add(){
 
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value)
  
      this.customerService.add(customerModel).subscribe(response=>{
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