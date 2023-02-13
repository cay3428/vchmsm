import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/Users';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
 
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  
  user: Users  
  id:number;
  editProfileForm:FormGroup;
  password: FormControl;
  email: string;
   
  

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private router: Router

  ) {}

  ngOnInit(): void {
    
    this.createProfileAddForm();
    this.GetUserById(); 
  }

  createProfileAddForm() {
    this.editProfileForm = this.formBuilder.group({
      id:['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  GetUserById() {
  Number(localStorage)
  Number(this.authService)
 // 'Id',JSON.stringify(this.Id)
    this.authService.GetUserById(Number(localStorage.getItem("id"))).subscribe(
      (response) => {
        this.user = response.data;
    
   

        this.editProfileForm.setValue({
          id:this.user,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: '',
          
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
    
      profileModel.id=parseInt(profileModel.id);
    
      this.authService.update(profileModel).subscribe(
        (response) => {
          this.toastrService.success('kullanıcı güncellendi');
          this.router.navigate(['/login']);
         
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

