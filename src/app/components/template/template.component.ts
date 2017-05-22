import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario: object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: '',
    check: false
  };

  paises: object = [
    {
      codigo: 'CRI',
      nombre: 'Costa Rica'
    }, {
      codigo: 'ECU',
      nombre: 'Ecuador'
    }, {
      codigo: 'COL',
      nombre: 'Colombia'
    }
  ];

  constructor() { }

  guardar( forma: NgForm ) {
    console.log('form: ', forma);
    console.log('value: ', forma.value);
  }

}
