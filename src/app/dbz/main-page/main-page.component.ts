import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  nuevo:Personaje={
    nombre: 'Maestro Roshi',
    poder: 1000
  }  
 /*  get personajes() : Personaje[] { //con este get, traigo la infode mis pesonajes del servicio
     return this.dbzService.personajes
  } */
  
  /* constructor(private dbzService: DbzService){ // esto es una Inyecccion de dependencia.
  } */
  constructor(){
    
  }
}
