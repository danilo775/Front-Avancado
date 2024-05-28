import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {
  produtoForm!: FormGroup;

  constructor(
    private formConstrutor: FormBuilder,
    private servico: ProdutoService,
    private rotas: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.produtoForm = this.formConstrutor.group({
      descricao: ['', Validators.required],
      preco_custo: ['', Validators.required],
      preco_vista: ['', Validators.required],
      preco_prazo: ['', Validators.required],
      quantidade: ['', Validators.required]
    });
  }

  get descricao() { return this.produtoForm.get('descricao'); }
  get preco_custo() { return this.produtoForm.get('preco_custo'); }
  get preco_vista() { return this.produtoForm.get('preco_vista'); }
  get preco_prazo() { return this.produtoForm.get('preco_prazo'); }
  get quantidade() { return this.produtoForm.get('quantidade'); }

  adicionarProduto(): void {
    if (this.produtoForm.invalid) {
      return;
    }
    console.log(this.produtoForm.value);
    this.servico.adicionarProduto(this.produtoForm.value);
    this.produtoForm.reset();
    this.rediracionaPrincipal();
  }

  rediracionaPrincipal() {
    setTimeout(() => {
      this.rotas.navigate(['listaProduto']);
    }, 2000);
  }
}
