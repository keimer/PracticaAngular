import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app Teste Input and Output!';
  varReceptora:string = '';
  //propiedades para probar el pipe "convertidorDolar"
  cantDolar:string = '1';
  factorCambio:number = 655;
  cantPesos:number = 655;

  //nombre = 'Keimer Zamora';
  opciones = [
    //'Opción 1','Opción 2'
    {opcion:'Opción 1'},
    {opcion:'Opción 2'},
    {opcion:'Opción 3'},
    {opcion:'Opción 4'},
    {opcion:'Opción 5'},
    {opcion:'Opción 6'}
  ]

  funcionReceptora(_varEnviada:string){
    this.varReceptora = _varEnviada;
    /*let _h1 = document.getElementById("titulo");
    _h1.color = red;*/
    console.log('functino funcionReceptora() activada');
  }

  

}
