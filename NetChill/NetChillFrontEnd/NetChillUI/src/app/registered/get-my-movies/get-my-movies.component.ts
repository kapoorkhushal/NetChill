import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Movie } from "src/app/Models/movie.interface";
import { LoginComponent } from 'src/app/un-registered/login/login.component';
import { Router } from '@angular/router';
import { MovieDetailComponent } from 'src/app/registered/movie-detail/movie-detail.component';

@Component({
  selector: 'app-get-my-movies',
  templateUrl: './get-my-movies.component.html',
  styleUrls: ['./get-my-movies.component.scss']
})
export class GetMyMoviesComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MoviesList: Movie[]=[];

  User:any={
    Id:0,
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
    this.User = LoginComponent.User;
    console.log(this.User);
    this.service.myMovies(this.User.Id).subscribe(data=>{
      this.MoviesList=data;
      console.log(data);
    });
  }

  buttonClick(val:Number){
    this.service.getDetails(val).subscribe((Response)=>{
      MovieDetailComponent.MovieObject=Response;
      this.router.navigateByUrl('registered/moviedetail')
    })
  }
}
