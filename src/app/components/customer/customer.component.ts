import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer;
  dataLoaded = false;
 
  
  constructor(private customerService:CustomerService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,
    private cartService:CartService) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
     this.getall();
      })
  }

  getall() {
    this.customerService.getall().subscribe(response=>{
      this.customers = response.data

      this.dataLoaded = true;
    })   
  }

  getbysid(salesId:number) {
    this.customerService.getbyid(salesId).subscribe(response=>{
      this.customer= response.data
      this.dataLoaded = true;
 
 
    })  } 
        



}

