import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-natbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, RouterLink, MatMenuModule, CommonModule
    , MatSlideToggleModule, FormsModule
  ],
  templateUrl:'./natbar.html',
  styleUrl:'./natbar.css'
})
export class Natbar {
pi:String="pi piiiiiii";

esHalloween:boolean=false;

}
