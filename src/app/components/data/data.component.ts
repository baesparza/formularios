import { outOfBoundsError } from '@angular/core/src/di/reflective_errors';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  datos: object = {
    nombrecompleto: {
      nombre: 'Bruno',
      apellido: 'Esparza'
    },
    correo: 'bruno.be81@gmail.com',
    pasatiempos: ['comer', 'dormir']
  };

  forma: FormGroup;
  constructor() {

    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                      ]),
        'apellido': new FormControl('', Validators.required)
      }),
      'correo': new FormControl('', [
                                    Validators.required,
                                    Validators.email
                                    ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    });

    // this.forma.setValue(this.datos);
  }

  guardarCambios () {
    console.log(this.forma.value);
    console.log(this.forma);

    /*this.forma.reset({
      nombrecompleto: {
      nombre: '',
      apellido: ''
    },
    correo: ''
    });*/
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  eliminarPasatiempo(num: number) {
   (<FormArray>this.forma.controls['pasatiempos']).removeAt(num);
  }

}
