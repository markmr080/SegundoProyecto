import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
import { LocalStorage } from '../../Servicios/local-storage';


@Component({
  selector: 'app-natbar',
  imports: [MatToolbarModule,  MatIconModule,  RouterLink, MatSlideToggleModule, FormsModule, CommonModule, MatMenuModule],
  templateUrl: './natbar.html',
  styleUrl: './natbar.css'
})
export class Natbar implements OnInit{

  
  pi:String="pi piiiiiii";
  esHalloween = false;
  nombre:string | null="";


  constructor(private servicioHalloween:ServicioHalloween, private storage:LocalStorage) {
  }

  ngOnInit(): void {
    this.nombre=this.storage.getNombre();

  }

  cambiarModo() {
    this.servicioHalloween.cambiarModoHalloween(this.esHalloween);
  }
  

  
}