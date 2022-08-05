
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService{

  peliculas: PeliculaDetalle[]=[];


  constructor(private storage: Storage , private toastCntrl: ToastController) {
    this.cargarFavoritos();
    this.storage.create();

  }

  async presentToast(message: string) {
    const toast = await this.toastCntrl.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  async guardarpelicula(pelicula: PeliculaDetalle) {
        await this.storage.create();

    let existe = false;
    let mensaje='';
    for(const peli of this.peliculas){
      if(peli.id === pelicula.id){
        existe=true;
        break;
}
}

if(existe){
  this.peliculas=this.peliculas.filter(peli=>
    peli.id !== pelicula.id);
    mensaje='Removido de Favoritos';
}else{
  this.peliculas.push(pelicula);
  mensaje='Pelicula Agregada con Exito';
}

    this.storage.set('peliculas',this.peliculas);
    this.presentToast(mensaje);

    return !existe;
}


// Es lo del storage
async cargarFavoritos(){
 const peliculas= await this.storage.get('peliculas');
 this.peliculas = peliculas || [];
 return this.peliculas;
}
async  existepelicula(id){

 await this.cargarFavoritos();
 const existe= this.peliculas.find(peli =>
  peli.id === id);
    return (existe) ? true: false;

}
}
