/* eslint-disable @typescript-eslint/naming-convention */
export interface Respuesta {
  page:          number;
  results:       Pelicula[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_pages:   number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_results: number;
}

export interface Pelicula {
  adult:             boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  backdrop_path:     string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  genre_ids:         number[];
  id:                number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_language: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_title:    string;
  overview:          string;
  popularity:        number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  poster_path:       string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  release_date:      string;
  title:             string;
  video:             boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  vote_average:      number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  vote_count:        number;
}

export interface PeliculaDetalle {
  adult?: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: Productioncompany[];
  production_countries?: Productioncountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Spokenlanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;

}
interface Spokenlanguage {
  iso_639_1: string;
  name: string;
}

interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

 export interface Genre {
  id: number;
  name: string;
}


export interface RespuestaCredits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Crew {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path?: string;
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path?: string;
}
