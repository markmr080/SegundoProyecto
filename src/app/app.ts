import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './Componentes/contador/contador';
import { Matatopos } from './Componentes/matatopos/matatopos';
import { Menu } from './Componentes/menu/menu';
import { MatButtonModule } from '@angular/material/button';
import { Natbar } from "./Componentes/natbar/natbar";
import { animacion } from "./Componentes/animacion/animacion";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Natbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SegundoProyecto');
}
