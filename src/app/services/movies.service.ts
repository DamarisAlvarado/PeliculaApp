import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Genre, PeliculaDetalle, Respuesta, RespuestaCredits } from '../interfaces/interfaces';




const URL = environment.url;
const apiKey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage = 0;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  generos: Genre[]=[];

  constructor(private http: HttpClient) { }


  private ejecutarQuery<T>(query: string ){
    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;
  //  console.log(query);

    return this.http.get<T>(query);
 }

 // eslint-disable-next-line @typescript-eslint/member-ordering
 getpopulares(){
  this.popularesPage++;
  const query=`/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;

  return this.ejecutarQuery<Respuesta>(query);
 }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  getFeature(){

    const hoy = new Date();
    const ultimodia = new Date(hoy.getFullYear(),hoy.getMonth() + 1 , 0 ).getDate();
    const mes = hoy.getMonth() + 1;


    let mesString;

    if (mes <10 ) {
      mesString= '0'+ mes;
    }else{
      mesString = mes;
    }

    const inicio = `${ hoy.getFullYear ()}-${mesString}-01`;
    const fin = `${ hoy.getFullYear ()}-${mesString}-${ultimodia}`;
    // eslint-disable-next-line max-len
    return this.ejecutarQuery<Respuesta>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`);

}

// eslint-disable-next-line @typescript-eslint/member-ordering
getPeliculaDetalle(id: string){
  return this.ejecutarQuery<PeliculaDetalle>(`/movie/${ id }?a=1`);
}
// eslint-disable-next-line @typescript-eslint/member-ordering
getActoresPelicula(id: string){
  return this.ejecutarQuery<RespuestaCredits>(`/movie/${ id }/credits?a=1`);
}

// eslint-disable-next-line @typescript-eslint/member-ordering
buscarPeliculas(text: string){
  return this.ejecutarQuery(`/search/movie?query=${text}`);
}

// eslint-disable-next-line @typescript-eslint/member-ordering
cargargenero(): Promise<Genre[]>{
  return new Promise( resolve => {
    this.ejecutarQuery('/genre/movie/list?a=1').subscribe( resp=> {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.generos = resp['genres'];
      console.log(this.generos);
      resolve(this.generos);
    }
    );

  });

}

}
