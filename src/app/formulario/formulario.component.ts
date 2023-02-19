import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() suma = new EventEmitter<number>();

  opA: number;
  opB: number;

 
  sumaTotal() {
    let resultado = this.opA + this.opB;
    this.suma.emit(resultado);
  }

}
