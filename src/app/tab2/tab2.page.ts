import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{


  bPeliculas: Pelicula[]=[];
  textBuscar: '';
  buscando=false;
  constructor(private moviesService: MoviesService ,
    private modalCtrl: ModalController) {}


  ngOnInit(){
  }

  buscar(event){
    const valor: string = event.detail.value;
    if(valor.length === 0){
      this.buscando=false;
      this.bPeliculas=[];
      return;
    }

    this.buscando= true;
    this.moviesService.buscarPeliculas(valor).subscribe(
      resp=>{
        console.log(resp);
        // eslint-disable-next-line @typescript-eslint/dot-notation
        this.bPeliculas= resp['results'];
        this.buscando=false;
      }
    );
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  async verDetalle(id: string){
    const modal= await this.modalCtrl.create({
        component: DetalleComponent,
        componentProps:{
          id
        }
      });
  modal.present();

    }

}
