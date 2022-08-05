import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { exists } from 'fs';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle ={
    genres: []
  };
  actores: Cast[]=[];
  oculto = 150;
  corazon = 'heart-outline';


  slideActores={
    slidesPerView:3.1,
    freeMode: true

  };

  constructor(private moviesservice: MoviesService,
    private modalCtrl: ModalController,
    private datalocal: DatalocalService) { }

  ngOnInit() {
  // console.log('ID', this.id);
 this.datalocal.existepelicula(this.id).then(existe =>
    this.corazon = (existe)? 'heart-sharp': 'heart-outline');


  this.moviesservice.getPeliculaDetalle(this.id).subscribe(
  resp=>{
  console.log(resp);
   this.pelicula = resp;
  }
  );

  this.moviesservice.getActoresPelicula(this.id).subscribe(
    resp=>{
      console.log(resp);
      this.actores=resp.cast;
   }
  );
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Regresar(){
    this.modalCtrl.dismiss();
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Favorito(){

   const existe= this.datalocal.guardarpelicula(this.pelicula);
      this.corazon = (existe)? 'heart-sharp': 'heart-outline';

  }


}
