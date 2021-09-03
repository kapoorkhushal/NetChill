import { Component, OnInit } from '@angular/core';
import { Movie } from "src/app/Models/movie.interface";
import { SharedService } from 'src/app/Services/shared.service';
import { LoginComponent } from 'src/app/un-registered/login/login.component';

@Component({
  selector: 'app-admin-movie-detail',
  templateUrl: './admin-movie-detail.component.html',
  styleUrls: ['./admin-movie-detail.component.scss']
})
export class AdminMovieDetailComponent implements OnInit {

  static MovieObject:Movie;
  Movie:Movie = AdminMovieDetailComponent.MovieObject;
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
    this.User = LoginComponent.User;
  }

  addToList(val:Number){
    this.User = LoginComponent.User;
    this.service.addToList(this.User.Id,val).subscribe((response)=>{
      console.log(response);
    })
  }
}
