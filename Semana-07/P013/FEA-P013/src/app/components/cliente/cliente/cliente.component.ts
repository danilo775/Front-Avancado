import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../model/cliente.model';
import { BancoService } from '../../../services/banco.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  loadedClientes: Cliente[] = [];
  filterTerm: string = ''; // Variável para o termo de filtro
  Clientes: string[] = [];
  searchText: string = '';
  column: string = '';

  constructor(private bancoService: BancoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getClientes();
    this.carregarFiltros();
  }

  getClientes() {
    this.bancoService.getCliente().subscribe(responseData => {
     // console.log(responseData);
      this.loadedClientes = responseData;
     // console.log(this.loadedClientes);
    });
  }

  editarCliente(id: string) {
    console.log(id);
  }

  apagarTudo() {
    this.bancoService.apagarTodosClientes().subscribe(() => {
      //console.log('Apagou tudo');
      this.loadedClientes = [];
    });
  }

  deletarCliente(id: string) {
    this.bancoService.deletarCliente(id).subscribe(() => {
     // console.log(id);
      this.getClientes(); // Recarrega os clientes após a exclusão
    });
  }

  rediracionaPrincipal() {
    setTimeout(() => {
      this.router.navigate(['listaCliente']);
    }, 2000);
  }

  onSelectChange(event: any) {
    this.column = event.target.value; // Atualiza column com o valor da opção selecionada
   // console.log(event.target.value); // Lida com a seleção do filtro
  }

  carregarFiltros() {
    this.Clientes = ['nome', 'endereco','cidade', 'bairro', 'cpf'];
  }
}
