import { Component, OnInit } from "@angular/core";
 import { Users } from "src/app/models/Users";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 
 

 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: Users   ;
  users : Users[] = []
  dataLoaded = false;
 

  constructor(private authservice: AuthService,
    private activatedRoute :ActivatedRoute, private toastrService:ToastrService
   ) {}

    
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.GetUserById(params["Id"])
      }else{
        this.getusers()
      }
    })
}



  getusers() {
    this.authservice.getusers().subscribe(response=>{
      this.users = response.data
      console.log(this.users)
      this.dataLoaded = true;
    })   
  }

  GetUserById(Id:number) {
    this.authservice.GetUserById(Id).subscribe(response=>{
      this.user= response.data
      this.dataLoaded = true;
      console.log(this.users)
 
    })   
  }
  
  
 






}
