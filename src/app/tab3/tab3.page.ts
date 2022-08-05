import { Component, OnInit } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DatalocalService } from '../services/datalocal.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {
  peliculasF: PeliculaDetalle[]=[];
  generos: Genre[]=[];

  favoritoG: any[]=[];

  constructor( private datalocal: DatalocalService ,  private movieService: MoviesService ) {}

  async ionViewWillEnter(){
    this.peliculasF= await this.datalocal.cargarFavoritos();
    this.generos= await this.movieService.cargargenero();
    this.peliculasforgenre(this.generos,this.peliculasF);
  }

  peliculasforgenre( generos: Genre[] , peliculas: PeliculaDetalle[]){
    this.favoritoG= [];
    generos.forEach(genero => {
      this.favoritoG.push({
        genero: genero.name,
        pelis: peliculas.filter(peli => peli.genres.find(genre=> genre.id === genero.id))
      });
    });
    console.log(this.favoritoG);
  }
}
