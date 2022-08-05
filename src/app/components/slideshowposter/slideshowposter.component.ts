import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshowposter',
  templateUrl: './slideshowposter.component.html',
  styleUrls: ['./slideshowposter.component.scss'],
})
export class SlideshowposterComponent implements OnInit {

  @Input() peliculas: Pelicula[]=[];

  slidesOpts = {
    slidesPerView: 3.1,
    freeMode: true,

  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

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
