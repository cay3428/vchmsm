import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { TodoComponent } from './components/todo/todo.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserUpdateComponent } from './components/user-update/user-update.component'; 
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserAuthComponent } from './components/user-auth-uptdate/user-auth.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesDeleteComponent } from './components/sales-delete/sales-delete.component';
import { SalesAddComponent } from './components/sales-add/sales-add.component';
import { SalesUpdateComponent } from './components/sales-update/sales-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDeleteComponent } from './components/customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    TodoComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    LoginComponent,
    UsersComponent,
    UserUpdateComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserAuthComponent,
    SalesComponent,
    SalesDeleteComponent,
    SalesAddComponent,
    SalesUpdateComponent,
    CustomerComponent,
    CustomerAddComponent,
    CustomerDeleteComponent,
    CustomerUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
