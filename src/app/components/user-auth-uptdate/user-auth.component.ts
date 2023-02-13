import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserOperationClaims } from 'src/app/models/UserOperationClaims';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
 
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
 
  userOperationClaims : UserOperationClaims 
  Id:number;
  editProfileForm:FormGroup;
   
  OperationClaimId:number;
 
  

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private router: Router

  ) {}

  ngOnInit(): void {
    
    this.createProfileAddForm();
    this.GetByAuthId(); 
  }

  createProfileAddForm() {
    this.editProfileForm = this.formBuilder.group({
      Id:['', Validators.required],
      OperationClaimId: ['', Validators.required],
      
    });
  }

  GetByAuthId() {
  Number(localStorage)
  Number(this.authService)
 
    this.authService.GetByAuthId(Number(localStorage.getItem("Id"))).subscribe(
      (response) => {
        this.userOperationClaims  = response.data;
 
 
        this.editProfileForm.setValue({
 
          Id:this.userOperationClaims,
        OperationClaimId:this.userOperationClaims.OperationClaimId,
          
          
        });
      },
      (responseError) => {
        this.toastrService.error(responseError.error);
      }
    );
  }

    editProfile() {
    if (this.editProfileForm.valid) {
      let profileModel = Object.assign({}, this.editProfileForm.value);
 
      profileModel.Id=parseInt(profileModel.Id);
      profileModel.OperationClaimId= parseInt(profileModel.OperationClaimId);
      this.authService.operationupdate(profileModel).subscribe(
        (response) => {
          this.toastrService.success('kullanıcı yetkilendirildi ');
          
         
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

