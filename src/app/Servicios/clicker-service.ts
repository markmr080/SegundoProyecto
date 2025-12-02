import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  
  valorClick:number = 1;
  clicksTotales:number = 0; 
  costeMejora1:number = 10;
  numeroMejoras:number = 1;
  costeMejora2:number = 1000;
  numeroMejoras2:number = 1;
  costeMejora3:number = 10000;
  numeroMejoras3:number = 1;

  click(){
    this.clicksTotales += this.valorClick;
  }

  clickAuto(){
    while(true){
          this.clicksTotales += this.valorClick;
          
    };
  }

  clickMejora1(){
    const valormejora= this.costeMejora1;

    if (this.clicksTotales>=valormejora) {
        this.mejora1();
        this.clicksTotales -= valormejora;
    }else {
      return;
    }
  }
  
  clickMejora2(){
    const valormejora= this.costeMejora2;

    if (this.clicksTotales>=valormejora) {
        this.mejora2();
        this.clicksTotales -= valormejora;
    }else {
      return;
    }
  }

   clickMejora3(){
    const valormejora= this.costeMejora3;

    if (this.clicksTotales>=valormejora) {
        this.mejora3();
        this.clicksTotales -= valormejora;
    }else {
      return;
    }
  }
  
  mejora1(){
    this.costeMejora1 = Math.round(this.costeMejora1 * 1.70);
    if (this.numeroMejoras === 0) {
    this.valorClick = 2;
  } else {
    this.valorClick = Math.round(this.valorClick * 1.1 + this.numeroMejoras) ;
  }

    this.numeroMejoras++;
  }

  mejora2(){
    this.costeMejora2 = Math.round(this.costeMejora2 * 1.70);
    this.valorClick =Math.round(this.valorClick * 1.35 + this.numeroMejoras2) ;
    this.numeroMejoras2++;
  }

  mejora3(){
    this.costeMejora3 = Math.round(this.costeMejora3 * 1.70);
    this.valorClick =Math.round(this.valorClick * 1.95 + this.numeroMejoras3) ;
    this.numeroMejoras2++;
  }


}