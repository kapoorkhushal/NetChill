import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Movie } from "src/app/Models/movie.interface";
import { LoginComponent } from '../un-registered/login/login.component';
import { Router } from '@angular/router';
import { AdminMovieDetailComponent } from './admin-movie-detail/admin-movie-detail.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MoviesList: Movie[]=[];
  static MovieObject:Movie;
  User:any={
    FullName:"",
    Email:"",
    Password:"",
    IsAdmin:false,
    SubscriptionDate:new Date(),
    IsRevoked:false
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.service.getAllMovies().subscribe(data=>{
      this.MoviesList=data;
      this.User = LoginComponent.User;
    });
  }

  buttonClick(val:Number){
    this.service.getDetails(val).subscribe((Response)=>{
      AdminMovieDetailComponent.MovieObject=Response;
      this.router.navigateByUrl('admin/moviedetail')
    })
  }

}
