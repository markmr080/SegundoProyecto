import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Contador } from './contador/contador';
import { Matatopos } from './matatopos/matatopos';
import { animacion } from './animacion/animacion';
import { PasoParametros } from './paso-parametros/paso-parametros';
import { EyeCandy } from './eye-candy/eye-candy';
import { ListaPersonajes } from './lista-personajes/lista-personajes';
import { FichaPersonaje } from './ficha-personaje/ficha-personaje';
import { Formulario } from './formulario/formulario';
export const routes: Routes = [
    {path:'contador', component:Contador},
    {path:'matatopos', component:Matatopos},
    {path:'animacion', component:animacion},
    {path:'paso-parametros/:num', component:PasoParametros},
    {path:'eye-candy', component:EyeCandy},
    {path: 'lista-personajes', component:ListaPersonajes},
    {path: 'ficha-personajes', component:FichaPersonaje},
    {path: 'formulario', component:Formulario}


];
