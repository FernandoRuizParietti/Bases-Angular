import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  borrado:string = '';
  
  borrarHeroe(){

    this.borrado = this.heroes.pop()?.toString() || ''; 

    console.log('Borrando...');
    
  }
  
}
