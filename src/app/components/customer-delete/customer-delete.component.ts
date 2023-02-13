import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
 import { Customer } from 'src/app/models/customer'; 
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  customers: Customer[] = [];
  dataLoaded = false;
  deletecustomerForm:FormGroup;
  customer :Customer 
  customerId :number;

  constructor(private formbuilder:FormBuilder, private customerService :CustomerService,private toastrService:ToastrService) { }
  ngOnInit(){
    this.deletecustomerForm=this.formbuilder.group({
      customerId:["", Validators.required],
 
  
  
    });
 
    this.getid(this.customerId)
  }

  onFormSubmit(){
    this.dataLoaded=false;
    let customer=this.deletecustomerForm.value;
     
    this.deletecustomerForm.reset();
  }





getsales() {
  this.customerService.getall().subscribe(response=>{
    this.customers = response.data
 
    this.dataLoaded = true;
  })   
}

getid(customerId:number) {
  this.customerService.getid(customerId).subscribe(response=>{
    this.customers= response.data
    this.dataLoaded = true;
 

  })  } 

  
  
  delete(){
    var customer = Object.assign({},this.deletecustomerForm.value)
    
 
    this.customerService.delete(Number(customer.customerId))
    .subscribe(response=>{this.toastrService.success(response.message,"Kayıt Silindi")
  
    
       
    })
    
    }







} 
 

 





