import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { BancoService } from '../../../services/banco.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent {
  clienteForm!: FormGroup;

  constructor(private formConstrutor: FormBuilder, private servico: BancoService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this. clienteForm = this.formConstrutor.group({
     nome: ['',Validators.required],
     endereco: ['', Validators.required],
     numero: ['', Validators.required],
     celular: ['',Validators.required],
     cidade: ['', Validators.required],
     bairro: ['', Validators.required],
     cpf: ['', Validators.required],
     mais_informacoes: ['']

    });
  }
  get nome() { return this.clienteForm.get('nome'); }
  get endereco() { return this.clienteForm.get('endereco'); }
  get numero() { return this.clienteForm.get('numero'); }
  get celular() { return this.clienteForm.get('celular'); }
  get cidade() { return this.clienteForm.get('cidade'); }
  get bairro() { return this.clienteForm.get('bairro'); }
  get cpf() { return this.clienteForm.get('cpf'); }
  get mais_informacoes() { return this.clienteForm.get('mais_informacoes'); }



  adicionarCliente(): void {
    if (this.clienteForm.invalid) {
      return;
    }
    console.log(this.clienteForm.value);
    this.servico.adicionarCliente(this.clienteForm.value);
    this.clienteForm.reset();
    this.rediracionaPrincipal();
  }

  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['listaCliente']);
    }, 2000);

  }
}
