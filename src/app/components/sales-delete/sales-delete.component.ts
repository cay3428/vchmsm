import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
 import { Sales } from 'src/app/models/sales'; 
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-delete',
  templateUrl: './sales-delete.component.html',
  styleUrls: ['./sales-delete.component.css']
})
export class SalesDeleteComponent implements OnInit {
  sales: Sales[] = [];
  dataLoaded = false;
  deletesalesForm:FormGroup;
  sale :Sales 
  salesId :number;

  constructor(private formbuilder:FormBuilder, private salesService :SalesService,private toastrService:ToastrService) { }
  ngOnInit(){
    this.deletesalesForm=this.formbuilder.group({
      salesId:["", Validators.required],
 
  
  
    });
 
    this.bysid(this.salesId)
  }

  onFormSubmit(){
    this.dataLoaded=false;
    let sale=this.deletesalesForm.value;
     
    this.deletesalesForm.reset();
  }





getsales() {
  this.salesService.getall().subscribe(response=>{
    this.sales = response.data
 
    this.dataLoaded = true;
  })   
}

bysid(salesId:number) {
  this.salesService.bysid(salesId).subscribe(response=>{
    this.sales= response.data
    this.dataLoaded = true;
  

  })  } 

  
  
  delete(){
    var sale = Object.assign({},this.deletesalesForm.value)
    
 
    this.salesService.delete(Number(sale.salesId))
    .subscribe(response=>{this.toastrService.success(response.message,"Kayıt Silindi")
  
    
       
    })
    
    }







} 
 

 





