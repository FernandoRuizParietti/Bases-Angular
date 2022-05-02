import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {
    //Defino esta propiedad como privada, para que solo se pueda tener acceso a ella
    //desde dentro de esta clase
   private _personajes: Personaje[]= [
        {
          nombre: 'Goku',
          poder:15000
      },
      {
        nombre: 'Vegeta', 
        poder: 9000
      }
      ];
      //con el spread operator, evito que desde afuera se tenga acceso a la  
      //propiedad definida como privada
      get personajes(): Personaje[]{
          return [...this._personajes];
      }

    /* constructor(){
        console.log('Servicio Inicializado');
      } */

      agregarPersonaje(personaje: Personaje){
            this._personajes.push(personaje);
      }

}