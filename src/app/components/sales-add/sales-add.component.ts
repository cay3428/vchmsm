import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { SalesService } from 'src/app/services/sales.service';
 

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css']
})
export class SalesAddComponent implements OnInit {

  salesAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private salesService:SalesService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createSalesAddForm();
  }

  createSalesAddForm(){
     this.salesAddForm = this.formBuilder.group({
salesId:[,Validators.required],
productId :[,Validators.required],
productName:  ["",Validators.required],
unitPrice :[,Validators.required],
customerId : [,Validators.required],
customerName : ["",Validators.required],
contatcTitle : ["",Validators.required],
address :["",Validators.required],
city: ["",Validators.required],
region : ["",Validators.required],
country :["",Validators.required],
phone: [,Validators.required],
fax  : [,Validators.required],
email : ["",Validators.required],


       
        
     })
  }

  add(){
    let salesModel = Object.assign({},this.salesAddForm.value)
 
    if(this.salesAddForm.valid){
      let salesModel = Object.assign({},this.salesAddForm.value)
  
      this.salesService.add(salesModel).subscribe(response=>{
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