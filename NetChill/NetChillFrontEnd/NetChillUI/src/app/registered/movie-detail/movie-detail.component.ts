import { Component, OnInit } from '@angular/core';
import { Movie } from "src/app/Models/movie.interface";
import { SharedService } from 'src/app/Services/shared.service';
import { LoginComponent } from 'src/app/un-registered/login/login.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public static MovieObject:Movie;
  Movie:Movie=MovieDetailComponent.MovieObject;
  User:any={
    Id:Number,
    FullName:"",
    Email:"",
    Password:"",
    IsAdmin:false,
    SubscriptionDate:new Date(),
    IsRevoked:false
  }
  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }

  message:string="";
  errorCheck:boolean=false;
  addToList(val:Number){
    this.User = LoginComponent.User;
    this.service.addToList(this.User.Id,val).subscribe((response)=>{
      console.log(response);
      if(response){
        this.message="Movie Added Successfully!";
      this.errorCheck=true;
      }
      else{
        this.message="Movie already exist!";
      this.errorCheck=true;
      }
    })
  }
}
