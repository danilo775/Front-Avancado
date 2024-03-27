import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-camelo',
  templateUrl: './camelo.component.html',
  styleUrls: ['./camelo.component.css']
})

export class CameloComponent implements OnInit{
  formulario!: FormGroup;
  autenticacaForm!: FormGroup;

 constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {

    this.formulario = this.formBuilder.group({
      endereco: this.formBuilder.group({
        rua: [''],
        cidade: [''],
        estado: [''],
      }),
    });

    this.autenticacaForm = this.formBuilder.group({
      senha: ['', Validators.required],
      confirmarSenha: [''],
    }, {
      validators: this.correspondenciaSenhaValidador
    });
    
  }

  correspondenciaSenhaValidador(formulario: FormGroup) {
    return formulario.get('senha')?.value === formulario.get('confirmarSenha')?.value
      ? null : { diferentes: true };
  }

  onSubmit(){
    console.log(this.formulario.value);
  }

  onSubmit2(){
    console.log(this.autenticacaForm.value);
  }


}
