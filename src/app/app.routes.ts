import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Contador } from './Componentes/Comp_Juegos/contador/contador';
import { Matatopos } from './Componentes/Comp_Juegos/matatopos/matatopos';
import { animacion } from './Componentes/animacion/animacion';
import { PasoParametros } from './Componentes/paso-parametros/paso-parametros';
import { EyeCandy } from './Componentes/eye-candy/eye-candy';
import { ListaPersonajes } from './Componentes/Comp_Juegos/Personajes/lista-personajes/lista-personajes';
import { FichaPersonaje } from './Componentes/Comp_Juegos/Personajes/ficha-personaje/ficha-personaje';
import { FormularioHalloween } from './Componentes/formulario-halloween/formulario-halloween';
import { Clicker } from './Componentes/clicker/clicker';
export const routes: Routes = [
    {path:'contador', component:Contador},
    {path:'matatopos', component:Matatopos},
    {path:'animacion', component:animacion},
    {path:'paso-parametros/:num', component:PasoParametros},
    {path:'eye-candy', component:EyeCandy},
    {path:'lista-personajes', component:ListaPersonajes},
    {path:'ficha-personajes', component:FichaPersonaje},
    {path:'formulario', component:FormularioHalloween},
    {path:'clicker', component:Clicker}


];
