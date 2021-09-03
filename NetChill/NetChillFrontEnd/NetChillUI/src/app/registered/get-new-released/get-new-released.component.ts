import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Movie } from "src/app/Models/movie.interface";
import { Router } from '@angular/router';
import { MovieDetailComponent } from 'src/app/registered/movie-detail/movie-detail.component';

@Component({
  selector: 'app-get-new-released',
  templateUrl: './get-new-released.component.html',
  styleUrls: ['./get-new-released.component.scss']
})
export class GetNewReleasedComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MoviesList: Movie[]=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.service.getNewReleasedMovies().subscribe(data=>{
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
