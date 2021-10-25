import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

   propBorados: string='';

  heroes: string[]=['Spiderman','Ironman','Hulk','Thor','Wolverine']


  borrarHeroe(){

     
    this.propBorados=this.heroes.shift()||'';

  }
}
