import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Movie } from "src/app/Models/movie.interface";

@Component({
  selector: 'app-un-registered',
  templateUrl: './un-registered.component.html',
  styleUrls: ['./un-registered.component.scss']
})
export class UnRegisteredComponent implements OnInit {

  constructor(private service:SharedService) { }

  MoviesList: Movie[]=[]

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.service.getAllMovies().subscribe(data=>{
      this.MoviesList=data;
    });
  }
}
