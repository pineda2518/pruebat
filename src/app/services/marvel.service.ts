import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelC } from '../interfaces/interfaces';
import { query } from '@angular/animations';
import { environment } from 'src/environments/environment';

const URL = environment.url_api;
const  PUBLICKEY = environment.public_Key;
const  HASH = environment.hash;

@Injectable({
  providedIn: 'root'
  
})
export class MarvelService {

  constructor( private http: HttpClient ) { }

  private ejecutarQuery(query: string){
    query = URL + query;
    
    return this.http.get(query);
  }

  // https://gateway.marvel.com:443/v1/public/characters/spiderman/stories?apikey=848b2b2ddf8b4d9addd34f2cdc51baf2
  // https://gateway.marvel.com:443/v1/public/comics?title=spiderman&apikey=848b2b2ddf8b4d9addd34f2cdc51baf2
  // https://gateway.marvel.com:443/v1/public/characters/spiderman/comics?title=spiderman&apikey=848b2b2ddf8b4d9addd34f2cdc51baf2
  // https://gateway.marvel.com:443/v1/public/characters?name=Spiderman&apikey=848b2b2ddf8b4d9addd34f2cdc51baf2

  getPersonaje () {
    return this.http.get<MarvelC>(`https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=848b2b2ddf8b4d9addd34f2cdc51baf2&hash=7467cd25d5be5bbae0ab9b4810ccd181`)
  }

  buscarPersonaje (texto: string){

    return this.ejecutarQuery(`/characters?ts=1000&apikey=${PUBLICKEY}&hash=${HASH}&name=${{texto}}`);

  }

}
