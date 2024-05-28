import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../../../services/banco.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrl: './editar-cliente.component.scss'
})
export class EditarClienteComponent {
  id:string = '';
  clienteForm!: FormGroup;
  editadoSucesso:boolean = false;

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
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getCliente(this.id);
  }

  get nome() { return this.clienteForm.get('nome'); }
  get endereco() { return this.clienteForm.get('endereco'); }
  get numero() { return this.clienteForm.get('numero'); }
  get celular() { return this.clienteForm.get('celular'); }
  get cidade() { return this.clienteForm.get('cidade'); }
  get bairro() { return this.clienteForm.get('bairro'); }
  get cpf() { return this.clienteForm.get('cpf'); }
  get mais_informacoes() { return this.clienteForm.get('mais_informacoes'); }


  getCliente(id: any) {
    console.log("id-->"    + id);
    this.servico.getClienteId(id).subscribe(responseData => {
      console.log(responseData);
      this.clienteForm.setValue(responseData);
    });
  }

  SalvarCliente() {
    console.log("salvar Suino: " + this.clienteForm.value);
    this.servico.editarSuino(this.id, this.clienteForm.value).subscribe(responseData => {
      if(responseData.status == 200){
        this.editadoSucesso = true;
        this.rediracionaPrincipal();
      }
    });
  }

  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['listaCliente']);
    }, 2000);

  }


}
