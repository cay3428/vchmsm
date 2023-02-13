import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UsersComponent } from './components/users/users.component';
import { LoginGuard } from './guards/login.guard';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component'; 
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserAuthComponent } from './components/user-auth-uptdate/user-auth.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesDeleteComponent } from './components/sales-delete/sales-delete.component';
import { SalesAddComponent } from './components/sales-add/sales-add.component';
import { SalesUpdateComponent } from './components/sales-update/sales-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDeleteComponent } from './components/customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';



const routes: Routes = [
  {path:"products/show",pathMatch:"full", component:ProductComponent}, 
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"products/getProducts",component:ProductComponent},
  {path:"products/getProductsByCategory",component:ProductComponent},
  {path:"products/delete", component:ProductDeleteComponent },
  {path:"products/update",component:ProductUpdateComponent},
  {path:"", component:LoginComponent},
  {path:"users/update",component:UserUpdateComponent},
  {path:"users/show",component:UsersComponent},
  {path:"user/add",component:UserAddComponent},
  {path:"user/delete",component:UserDeleteComponent},
  {path:"users/authupdate",component:UserAuthComponent},
  {path:"sales/show",component:SalesComponent},
  {path:"sales/delete",component:SalesDeleteComponent},
  {path:"sales/add",component:SalesAddComponent},
  {path:"sales/update",component:SalesUpdateComponent},
  {path:"customer/show",component:CustomerComponent},
  {path:"customer/add",component:CustomerAddComponent},
  {path:"customer/delete",component:CustomerDeleteComponent},
  {path:"customer/update",component:CustomerUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
