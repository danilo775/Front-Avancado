import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs/operators';
import { AutenticaService } from './autentica.service';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiURL = 'https://p013-549ed-default-rtdb.firebaseio.com/produtos.json';

  constructor(private http: HttpClient, private autenticaService: AutenticaService) { }

  adicionarProduto(produto: Produto) {
    return this.http.post(this.apiURL, produto).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  getProdutos() {
    return this.http.get<{[key: string]: Produto}>(this.apiURL).pipe(
      map((responseData) => {
        const listaArray: Produto[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            listaArray.push({ ...(responseData[key]), id: key });
          }
        }
        return listaArray;
      }),
    );
  }

  deletarProduto(id: string) {
    return this.http.delete(`https://p013-549ed-default-rtdb.firebaseio.com/produtos/${id}.json`);
  }

  getProdutoId(id: string) {
    return this.http.get<Produto>(`https://p013-549ed-default-rtdb.firebaseio.com/produtos/${id}.json`);
  }

  apagarTodosProdutos() {
    return this.http.delete(this.apiURL);
  }

  getFilteredProdutos(filterTerm: string) {
    // Implementar lógica de filtragem (ajustar conforme necessário)
    return this.getProdutos().pipe(
      map(produtos => produtos.filter(produto =>
        produto.descricao.includes(filterTerm) ||
        produto.preco_custo.toString().includes(filterTerm) ||
        produto.preco_vista.toString().includes(filterTerm) ||
        produto.preco_prazo.toString().includes(filterTerm) ||
        produto.quantidade.toString().includes(filterTerm)
      ))
    );
  }

  editarProduto(id: string, produtoData: {
    descricao: string;
    preco_custo: number;
    preco_vista: number;
    preco_prazo: number;
    quantidade: number;
  }) {
    return this.http.put(`https://p013-549ed-default-rtdb.firebaseio.com/produtos/${id}.json`, produtoData, {observe: 'response'});
  }
}
