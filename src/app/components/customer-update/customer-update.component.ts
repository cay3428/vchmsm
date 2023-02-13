import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 import { Customer } from 'src/app/models/customer';
 import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
 

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css'],
})
export class CustomerUpdateComponent implements OnInit {
  customers:Customer []=[]
  customer: Customer
  customerId:number;
  editProfileForm:FormGroup;
 
 
   
  

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private customerService:CustomerService,
    private router: Router

  ) {}

  ngOnInit(): void {
    
    this.createProfileAddForm();
    this.getid(); 
  }

  createProfileAddForm() {
    this.editProfileForm = this.formBuilder.group({
 
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
       
      
      

      
    });
  }

  getid() {
  Number(localStorage)
  Number(this.customerService)
 
    this.customerService.getid (Number(localStorage.getItem("customerId"))).subscribe(
      (response) => {
        this.customers = response.data;
    
 

        this.editProfileForm.setValue({
            customerId:this.customer,
            
            customerName :this.customer.customerName,
            companyName:this.customer.companyName,
            city:this.customer.city,
            region:this.customer.region,
            contatcTitle:this.customer.contatcTitle,
            address:this.customer.address,
            email:this.customer.email,
            country:this.customer.country,
            phone:this.customer.phone,
            fax:this.customer.fax
      
           
       
        });
      },
      (responseError) => {
        this.toastrService.error(responseError.error);
      }
    );
  }

     customereditProfile() {
    if (this.editProfileForm.valid) {
      let customerprofileModel = Object.assign({}, this.editProfileForm.value);
    
      customerprofileModel.customerId=parseInt(customerprofileModel.customerId);
      
      this.customerService.update(customerprofileModel).subscribe(
        (response) => {
          this.toastrService.success('güncellendi');
           
         
        },
        (responseError) => {
          this.toastrService.error(responseError.error);
        }
      );
    } else {
      this.toastrService.error('Bir hata oluştu.');
    }
  }

 
}