import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Movie } from "src/app/Models/movie.interface";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service:SharedService, private router: Router) { }
  MoviesList: Movie[]=[];

  userForm: FormGroup = this.formBuilder.group({
    Email: this.formBuilder.control('',[Validators.required, Validators.email]),
    Password: this.formBuilder.control('',[Validators.required]),
  })

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.service.getAllMovies().subscribe(data=>{
      this.MoviesList=data;
    });
  }

  hasError(controlName:string, errorType:string){
    const control = this.userForm.get(controlName);
    if(control && control.touched){
      return control.getError(errorType);
    }
    return false
  }

  message:string="";
  errorCheck:boolean=false;
  static User:any={
    Id:0,
    FullName:"",
    Email:"",
    Password:"",
    IsAdmin:false,
    SubscriptionDate:new Date(),
    IsRevoked:false
  }

  onSubmit(){
    this.service.login(this.userForm.value).subscribe((response)=>{
      LoginComponent.User=response;
      if(LoginComponent.User.IsAdmin){
        this.router.navigateByUrl('/admin')
      }
      else{
        this.router.navigate(['/registered'])
      }
    },(error)=>{
      this.message="Invalid Credentials";
      this.errorCheck=true;
      console.log('error',error);
    })
  }

}
