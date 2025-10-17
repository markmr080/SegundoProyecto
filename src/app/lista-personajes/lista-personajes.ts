import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaPersonaje} from '../ficha-personaje/ficha-personaje';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../models/Personaje.model';
@Component({
  selector: 'app-lista-personajes',
  imports: [CommonModule, FichaPersonaje, FormsModule],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes implements OnInit{
    
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
  }
   personajes:Personaje[]=[
    { nombre: 'Anduin', raza: 'Humano', poder: 4, imagen: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Anduin_Wrynn_by_Erik_Braddock.jpg' },
    { nombre: 'Malfurion', raza: 'Elfo', poder: 5, imagen: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/ARP5A1V3X2DG1400551405290.jpg' },
    { nombre: 'Magni Barbabronce', raza: 'Enano', poder: 3, imagen: 'https://wow.zamimg.com/uploads/screenshots/normal/900122-magni-barbabronce.jpg' },
    { nombre: 'Zul`jin', raza: 'Troll', poder: 5, imagen: 'https://static.heroesofthestorm.com/heroes/zuljin/skins/warlord-of-the-amani-800.jpg' },
    { nombre: 'Thrall', raza: 'Orco', poder: 4, imagen: 'https://i.pinimg.com/736x/3c/8c/c2/3c8cc29dd389429533324467b76cf7c4.jpg' }
  ];
 
}