import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador';
import { Matatopos } from './matatopos/matatopos';
import { Menu } from './menu/menu';
import { MatButtonModule } from '@angular/material/button';
import { Natbar } from "./natbar/natbar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador, Matatopos, Menu, MatButtonModule, Natbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SegundoProyecto');
}
