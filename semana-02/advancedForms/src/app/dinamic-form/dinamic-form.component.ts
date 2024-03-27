import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dinamic-form',
  //templateUrl: './dinamic-form.component.html',
  template:`
  <form [formGroup]="formulario" (ngSubmit)="onSubmit()">
    <div *ngFor="let campo of camposDoForm">
      <label>{{campo.rotulo}}</label>
      <input [type]="campo.tipo" [formControlName]="campo.nome">
    </div>
    <button type="submit">Enviar</button>
  </form> `
})

export class DinamicFormComponent {

  formulario!: FormGroup;

  camposDoForm = [
     {
       tipo: 'text',
       nome: 'nome',
       rotulo: 'Nome:'
     },
     {
       tipo: 'text',
       nome: 'sobrenome',
       rotulo: 'Sobrenome:'
     },
     {
       tipo: 'email',
       nome: 'email',
       rotulo: 'Email:'
     },
     {
       tipo: 'date',
       nome: 'dataNascimento',
       rotulo: 'Data de Nascimento:'
     },
     {
       tipo: 'tel',
       nome: 'numeroDeTelefone',
       rotulo: 'Telefone:'
     }
     
   ];

   constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({});
    this.camposDoForm.forEach(campo => {
      this.formulario.addControl(campo.nome, this.fb.control(''));
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

}
