import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-slidespares',
  templateUrl: './slidespares.component.html',
  styleUrls: ['./slidespares.component.scss'],
})
export class SlidesparesComponent implements OnInit {

  @Input() peliculas: Pelicula[]=[];
  @Output() cargarMas = new EventEmitter();

  slidesOpts = {
    slidesPerView: 3.1,
    freeMode: true,
    spaceBetween: -15
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}


  onclick(){
    this.cargarMas.emit();

  }


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
