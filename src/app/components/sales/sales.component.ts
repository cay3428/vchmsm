import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Sales } from 'src/app/models/sales';
import { SalesService } from 'src/app/services/sales.service';
@Component({ selector:'app-sales',
templateUrl:'./sales.component.html',
styleUrls:['./sales.component.css']
})
export class SalesComponent implements OnInit {
    sale :  Sales ; 
    sales : Sales []=[];
    dataLoaded=false;
 

    constructor(private salesService:SalesService, 
        private activatedRoute:ActivatedRoute, 
        private toastrService:ToastrService,
        private cartService:CartService) {}
    
        ngOnInit(): void {
            this.activatedRoute.params.subscribe(params=>{
               
                this.getall()
              
            })
        }

        getall() {
            this.salesService.getall().subscribe(response=>{
              this.sales = response.data
 
              this.dataLoaded = true;
            })   
          }

          getbysid(salesId:number) {
            this.salesService.getbysid(salesId).subscribe(response=>{
              this.sale= response.data
              this.dataLoaded = true;
              console.log(this.sales)
         
            })  } 
                



}

