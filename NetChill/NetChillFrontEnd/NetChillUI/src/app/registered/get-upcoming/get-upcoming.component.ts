import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Movie } from "src/app/Models/movie.interface";
import { Router } from '@angular/router';
import { MovieDetailComponent } from 'src/app/registered/movie-detail/movie-detail.component';

@Component({
  selector: 'app-get-upcoming',
  templateUrl: './get-upcoming.component.html',
  styleUrls: ['./get-upcoming.component.scss']
})
export class GetUpcomingComponent implements OnInit {

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
      MovieDetailComponent.MovieObject=Response;
      this.router.navigateByUrl('registered/moviedetail')
    })
  }

}
