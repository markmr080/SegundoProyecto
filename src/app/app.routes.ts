import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Contador } from './contador/contador';
import { Matatopos } from './matatopos/matatopos';
import { animacion } from './animacion/animacion';
import { PasoParametros } from './paso-parametros/paso-parametros';
export const routes: Routes = [
    {path:'contador', component:Contador},
    {path:'matatopos', component:Matatopos},
    {path:'animacion', component:animacion},
    {path:'paso-parametros/:num', component:PasoParametros}


];
