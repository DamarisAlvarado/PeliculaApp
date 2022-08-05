import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

peliculasRecientes: Pelicula[]=[];
populares: Pelicula[]=[];





  constructor(private movieservice: MoviesService) {}


  ngOnInit(){
    this.movieservice.getFeature()
    .subscribe(resp =>{

      this.peliculasRecientes= resp.results;
    });
    this.getpopulares();
      }


  cargarMas(){
   this.getpopulares();
  }
  getpopulares(){
    this.movieservice.getpopulares().subscribe(
      resp=> {
       const arrTemp =[...this.populares, ...resp.results];
      this.populares= arrTemp;

  });
}
}
