import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "src/app/Models/movie.interface";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input()
  movie!: Movie;
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
