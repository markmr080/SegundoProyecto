import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
    nombre: ['  ', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    edad: ['', [Validators.required, Validators.min(0)]]
  });
  }

  mostrar() {
    if (this.formulario.invalid) {
        console.log("el formulario contiene errores");
    }else {
        console.log(this.formulario.value);
    }
  
  };

  resetear() {
    this.formulario.reset({
      nombre: "",
      email: "",
    });

  }


}
