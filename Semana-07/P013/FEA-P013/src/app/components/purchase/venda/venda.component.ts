import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../../../services/banco.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.scss'
})
export class VendaComponent {
  formContato: FormGroup;
  constructor(private formBuilder: FormBuilder, private bancoService:BancoService , private rotas: Router, private route: ActivatedRoute) {
    this.formContato = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formContato.value);
    this.formContato.reset();
    this.rediracionaPrincipal();
  }
  rediracionaPrincipal() {
    setTimeout(() => {
      this.rotas.navigate(['listaCliente']);
    }, 1000);
  }
}
