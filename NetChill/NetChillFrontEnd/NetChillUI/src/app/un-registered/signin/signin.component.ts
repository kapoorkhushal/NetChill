import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Movie } from "src/app/Models/movie.interface";
import { User } from "src/app/Models/user.interface";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service:SharedService, private router: Router) { }

  MoviesList: Movie[]=[];

  User:User={
    Id:0,
    FullName:"",
    Email:"",
    Password:"",
    IsAdmin:false,
    SubscriptionDate:new Date(),
    IsRevoked:false
  }

  userForm: FormGroup = this.formBuilder.group({
    FullName: this.formBuilder.control('',[Validators.required]),
    Email: this.formBuilder.control('',[Validators.required, Validators.email]),
    Password: this.formBuilder.control('',[Validators.required]),
    RePassword: this.formBuilder.control('',[Validators.required]),
    AgreeTerms: this.formBuilder.control('',[Validators.requiredTrue])
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

  passwordValidate(controlName:string, errorType:string){
    const passwordControl = this.userForm.get('Password');
    const control = this.userForm.get(controlName);
    if(control && control.touched){
      if(control.value!=passwordControl?.value){
        return true;
      }
    }
    return false;
  }

  message:string="";
  errorCheck:boolean=false;
  onSubmit(){
    this.service.signup(this.userForm.value).subscribe((response)=>{
      console.log('repsonse ',response);
      this.router.navigate(['/login'])
    },(error)=>{
      this.message="User Already Exists";
      this.errorCheck=true;
      console.log('error',error);
    })
    
  }
}
