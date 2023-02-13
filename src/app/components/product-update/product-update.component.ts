import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 
import { ProductService } from 'src/app/services/product.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Product } from 'src/app/models/product';
 
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  products:Product []=[]
  product: Product 
  productId:number;
  editProfileForm:FormGroup;
  password: FormControl;
 
   
  

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private productService: ProductService,
    private router: Router

  ) {}

  ngOnInit(): void {
    
    this.createProfileAddForm();
    this.getbyid(); 
  }

  createProfileAddForm() {
    this.editProfileForm = this.formBuilder.group({
      productId:['', Validators.required],
      categoryId: ['', Validators.required],
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      
    });
  }

  getbyid() {
  Number(localStorage)
  Number(this.productService)
 
    this.productService.getbyid(Number(localStorage.getItem("productId"))).subscribe(
      (response) => {
        this.products = response.data;
    
   console.log(response.data)

        this.editProfileForm.setValue({
            prodcutId:this.product,
            categoryId:this.product.categoryId,
            productName:this.product.productName,
            unitPrice:this.product.unitPrice 
            
        });
      },
      (responseError) => {
        this.toastrService.error(responseError.error);
      }
    );
  }

     producteditProfile() {
    if (this.editProfileForm.valid) {
      let productprofileModel = Object.assign({}, this.editProfileForm.value);
    
      productprofileModel.prodcutId=parseInt(productprofileModel.prodcutId);
      
      this.productService.update(productprofileModel).subscribe(
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