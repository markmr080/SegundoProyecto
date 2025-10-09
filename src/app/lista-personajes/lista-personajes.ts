import { Component, Injectable } from '@angular/core';
import { FichaPersonaje } from '../ficha-personaje/ficha-personaje';


@Component({
  selector: 'app-lista-personajes',
  imports: [],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})

@Injectable()
export class ListaPersonajes {

    public personajes:Array<FichaPersonaje>

    constructor() {


      this.personajes=[
            new FichaPersonaje('a', 'humano', 23, 'algo'),
            new FichaPersonaje('b', 'orco', 60, 'garrote')
      ]
    }

    getCliente(): Array<FichaPersonaje> {
        return this.personajes;

    }

    
}
