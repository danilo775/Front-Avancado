import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs/operators';
import { AutenticaService } from './autentica.service';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  apiURL = 'https://p013-549ed-default-rtdb.firebaseio.com/clientes.json';

  constructor(private http: HttpClient, private autenticaService: AutenticaService) { }

  adicionarCliente(cliente: Cliente) {
    return this.http.post(this.apiURL, cliente).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  getCliente() {
    return this.http.get<{[key: string]: Cliente}>(this.apiURL).pipe(
      map((responseData) => {
        const listaArray: Cliente[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            listaArray.push({ ...(responseData[key]), id: key });
          }
        }
        return listaArray;
      }),
    );
  }

  deletarCliente(id: string) {
    return this.http.delete(`https://p013-549ed-default-rtdb.firebaseio.com/clientes/${id}.json`);
  }

  getClienteId(id: string) {
    return this.http.get<Cliente>(`https://p013-549ed-default-rtdb.firebaseio.com/clientes/${id}.json`);
  }

  apagarTodosClientes() {
    return this.http.delete(this.apiURL);
  }

  getFilteredCliente(filterTerm: string) {
    // Implementar lógica de filtragem (ajustar conforme necessário)
    return this.getCliente().pipe(
      map(clientes => clientes.filter(cliente =>
        cliente.nome.includes(filterTerm) ||
        cliente.endereco.includes(filterTerm) ||
        cliente.numero.includes(filterTerm) ||
        cliente.celular.includes(filterTerm) ||
        cliente.cidade.includes(filterTerm) ||
        cliente.bairro.includes(filterTerm) ||
        cliente.cpf.includes(filterTerm) ||
        cliente.mais_informacoes.includes(filterTerm)
      ))
    );
  }

  editarSuino(id:string, ClienteData: {
    nome: string;
    endereco: string;
    numero: string;
    celular: string;
    cidade: string;
    bairro: string;
    cpf: string;
    mais_informacoes: string;
}
) {
return this.http.put(`https://p013-549ed-default-rtdb.firebaseio.com/clientes/${id}.json`, ClienteData, {observe: 'response'});
}


}
