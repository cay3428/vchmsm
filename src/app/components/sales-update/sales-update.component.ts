import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 import { Sales } from 'src/app/models/sales';
 import { SalesService } from 'src/app/services/sales.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
 

@Component({
  selector: 'app-sales-update',
  templateUrl: './sales-update.component.html',
  styleUrls: ['./sales-update.component.css'],
})
export class SalesUpdateComponent implements OnInit {
  sales:Sales []=[]
  sale: Sales 
  salesId:number;
  editProfileForm:FormGroup;
 
 
   
  

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private salesService:SalesService,
    private router: Router

  ) {}

  ngOnInit(): void {
    
    this.createProfileAddForm();
    this.bysid(); 
  }

  createProfileAddForm() {
    this.editProfileForm = this.formBuilder.group({
 
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

      
    });
  }

  bysid() {
  Number(localStorage)
  Number(this.salesService)
 
    this.salesService.bysid(Number(localStorage.getItem("salesId"))).subscribe(
      (response) => {
        this.sales = response.data;
    
 

        this.editProfileForm.setValue({
            salesId:this.sale,
      
           
            productId :this.sale.productId,
            productName: this.sale.productName,
            unitPrice :this.sale.unitPrice,
            customerId : this.sale.customerId,
            customerName : this.sale.customerName,
            contatcTitle : this.sale.contatcTitle,
            address :this.sale.address,
            city: this.sale.city,
            region : this.sale.region, 
            country :this.sale.country,
            phone: this.sale.phone,
            fax  :this.sale.phone,
            email : this.sale.email
     
            
            



        });
      },
      (responseError) => {
        this.toastrService.error(responseError.error);
      }
    );
  }

     saleseditProfile() {
    if (this.editProfileForm.valid) {
      let salesprofileModel = Object.assign({}, this.editProfileForm.value);
    
      salesprofileModel.salesId=parseInt(salesprofileModel.salesId);
      
      this.salesService.update(salesprofileModel).subscribe(
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