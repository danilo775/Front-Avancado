import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.scss'
})
export class EditarProdutoComponent implements OnInit {
  id: string = '';
  produtoForm!: FormGroup;
  editadoSucesso: boolean = false;

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
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getProduto(this.id);
  }

  get descricao() { return this.produtoForm.get('descricao'); }
  get preco_custo() { return this.produtoForm.get('preco_custo'); }
  get preco_vista() { return this.produtoForm.get('preco_vista'); }
  get preco_prazo() { return this.produtoForm.get('preco_prazo'); }
  get quantidade() { return this.produtoForm.get('quantidade'); }

  getProduto(id: any) {
    console.log("id-->" + id);
    this.servico.getProdutoId(id).subscribe(responseData => {
      console.log(responseData);
      this.produtoForm.setValue(responseData);
    });
  }

  SalvarProduto() {
    console.log("salvar Produto: " + this.produtoForm.value);
    this.servico.editarProduto(this.id, this.produtoForm.value).subscribe(responseData => {
      if (responseData.status === 200) {
        this.editadoSucesso = true;
        this.rediracionaPrincipal();
      }
    });
  }

  rediracionaPrincipal() {
    setTimeout(() => {
      this.rotas.navigate(['listaProduto']);
    }, 2000);
  }
}
