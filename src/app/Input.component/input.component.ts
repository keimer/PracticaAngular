import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() varQueRecibe:string;
  @Output() eventoPersonalizado = new EventEmitter<string>();
  
enviarMensajeAlPadre():void{
    this.eventoPersonalizado.emit(this.varQueRecibe);
  }

  constructor() { }

  ngOnInit() {
  }

}
