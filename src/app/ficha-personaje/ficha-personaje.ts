import { Component } from '@angular/core';

@Component({
  selector: 'app-ficha-personaje',
  imports: [],
  templateUrl: './ficha-personaje.html',
  styleUrl: './ficha-personaje.css'
})
export class FichaPersonaje {

  constructor(public nombre:String,
  public raza:String,
  public edad:Number,
  public arma:String

  ){}

}
