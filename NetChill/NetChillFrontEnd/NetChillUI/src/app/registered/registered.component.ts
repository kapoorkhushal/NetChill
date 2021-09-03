import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Movie } from "src/app/Models/movie.interface";
import { LoginComponent } from '../un-registered/login/login.component';
import { Router } from '@angular/router';
import { MovieDetailComponent } from 'src/app/registered/movie-detail/movie-detail.component';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MoviesList: Movie[]=[]
  User:any={
    Id:0,
    FullName:"",
    Email:"",
    Password:"",
    IsAdmin:false,
    SubscriptionDate:new Date(),
    IsRevoked:false
  }

  IsRevoked: Boolean = false;

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.service.getAllMovies().subscribe(data=>{
      this.MoviesList=data;
    });
    this.User = LoginComponent.User;
    this.IsRevoked = this.User.IsRevoked;
    this.User.IsRevoked = false;
  }

  buttonClick(val:Number){
    this.service.getDetails(val).subscribe((Response)=>{
      MovieDetailComponent.MovieObject=Response;
      this.router.navigateByUrl('registered/moviedetail')
    })
  }
}
