import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { MarvelC, Personaje } from '../interfaces/interfaces';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  buscando= false;
  personajes: Personaje[] = [];
  Per: Personaje [] = [];
  TextoBuscar= '';
  ideas: string []=['Spiderman','Iron Man', 'Capitan America', 'Hulk', 'Doctor Strange']
  
  constructor(private MarvelService: MarvelService) {}

  buscar(event: any){
    const valor = event.detail.value;

    if ( valor.length === 0 ){
      this.buscando = false
      this.personajes = []
      return
    }

    // console.log(valor);
    this.buscando= true;

    this.MarvelService.buscarPersonaje(valor).subscribe(resp =>{
      console.log(resp);
    })
  }


  ngOnInit(){
    this.MarvelService.getPersonaje()
    .subscribe(resp => {
      console.log('resp', resp)
      this.personajes= resp['results'];
      this.buscando= false
    })
  }

}
