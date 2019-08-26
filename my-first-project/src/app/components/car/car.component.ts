import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
name:string;
speed:number;
model:string;
colors:Colors;
options:string[];
test:any;
isEdit:boolean=false;

  constructor() { }

  ngOnInit() {
    this.name='Audi';
    this.speed=235;
    this.model='RS8';
    this.colors={
      car:'Белый',
      salon:'Черный',
      wheels:'Серебристый'
    };
    this.options=["ABS", "Автопилот"," Авто паркинг"];
    this.test=true;
  }
  deleteOpt(){
    for(let i = 0; i < this.options.length;i++){
      if(this.options[i] == option){
      this.options.splice(i,1);
      break;
      }
    }

  }
  showEdit(){
    this.isEdit=!this.isEdit;
  }
  AddOpt(option){
  this.options.unshift(option);
  return false
  }
    carSelect(carName){
      if(carName=='bmw'){
      this.name='BMW';
      this.speed=280;
      this.model='RS';
      this.colors={
        car:'Синий',
        salon:'Черный',
        wheels:'Серебристый'
      };
      this.options=["ABS", "Автопилот"," Авто паркинг"];
    }
    else if(carName=='Audi'){
      this.name='Audi';
      this.speed=235;
      this.model='RS8';
      this.colors={
        car:'Белый',
        salon:'Черный',
        wheels:'Серебристый'
      };
      this.options=["ABS", "Автопилот"," Авто паркинг"];
    }
      else {
        this.name='Mercedes';
        this.speed=235;
        this.model='RS8';
        this.colors={
          car:'Белый',
          salon:'Черный',
          wheels:'Серебристый'
};
this.options=["ABS", "Автопилот"," Авто паркинг"];
}





interface Colors{
  car:string,
  salon:string,
  wheels:string;
}
}
}
