import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  deleteProductForm:FormGroup;
  product :Product 
  productId :number;

  constructor(private formbuilder:FormBuilder, private productService:ProductService,private toastrService:ToastrService) { }
  ngOnInit(){
    this.deleteProductForm=this.formbuilder.group({
      productId:["", Validators.required],
 
  
  
    });
 
    this.getbyid(this.productId)
  }

  onFormSubmit(){
    this.dataLoaded=false;
    let product=this.deleteProductForm.value;
     
    this.deleteProductForm.reset();
  }





getProducts() {
  this.productService.getProducts().subscribe(response=>{
    this.products = response.data
 
    this.dataLoaded = true;
  })   
}

getbyid(productId:number) {
  this.productService.getbyid(productId).subscribe(response=>{
    this.products = response.data
    this.dataLoaded = true;
  })   
}

 
  
 delete(){
var product = Object.assign({},this.deleteProductForm.value)

 
this.productService.delete(Number(product.productId))
.subscribe(response=>{this.toastrService.success(response.message,"Kayıt Silindi")
  

 
})

}

 
 
 
}




