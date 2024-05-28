import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../../../model/produto.model';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  loadedProdutos: Produto[] = [];
  filterTerm: string = ''; // Variável para o termo de filtro
  Produtos: string[] = [];
  searchText: string = '';
  column: string = '';

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProdutos();
    this.carregarFiltros();
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe(responseData => {
      this.loadedProdutos = responseData;
    });
  }

  editarProduto(id: string) {
    console.log(id);
  }

  apagarTudo() {
    this.produtoService.apagarTodosProdutos().subscribe(() => {
      this.loadedProdutos = [];
    });
  }

  deletarProduto(id: string) {
    this.produtoService.deletarProduto(id).subscribe(() => {
      this.getProdutos(); // Recarrega os produtos após a exclusão
    });
  }

  rediracionaPrincipal() {
    setTimeout(() => {
      this.router.navigate(['listaProduto']);
    }, 2000);
  }

  onSelectChange(event: any) {
    this.column = event.target.value; // Atualiza column com o valor da opção selecionada
  }

  carregarFiltros() {
    this.Produtos = ['descricao', 'preco_custo', 'preco_vista', 'preco_prazo', 'quantidade'];
  }
}
