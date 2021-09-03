import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Movie } from "src/app/Models/movie.interface";
import { Router } from '@angular/router';
import { AdminMovieDetailComponent } from '../admin-movie-detail/admin-movie-detail.component';

@Component({
  selector: 'app-admin-upcoming-movie',
  templateUrl: './admin-upcoming-movie.component.html',
  styleUrls: ['./admin-upcoming-movie.component.scss']
})
export class AdminUpcomingMovieComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MoviesList: Movie[]=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.service.getUpcomingMovies().subscribe(data=>{
      this.MoviesList=data;
    });
  }

  buttonClick(val:Number){
    this.service.getDetails(val).subscribe((Response)=>{
      AdminMovieDetailComponent.MovieObject=Response;
      this.router.navigateByUrl('admin/moviedetail')
    })
  }

}
