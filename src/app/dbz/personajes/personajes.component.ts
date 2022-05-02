import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

 /*  @Input()
  personajes:Personaje[]=[] */

  //Traigo los personajes desde mi servicio:

  get personajes(){
    return this.dbzService.personajes  
  }

  constructor(private dbzService: DbzService){ // esto es una Inyecccion de dependencia.

  }
}
