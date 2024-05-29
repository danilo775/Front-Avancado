import { CadastroClienteComponent } from './components/cliente/cadastro-cliente/cadastro-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { CadastroProdutoComponent } from './components/produto/cadastro-produto/cadastro-produto.component';
import { ProdutoComponent } from './components/produto/produto/produto.component';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';
import { VendaComponent } from './components/purchase/venda/venda.component';
import { SalesComponent } from './components/purchase/sales/sales.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'adiconarCliente', component: CadastroClienteComponent},
  { path: 'listaCliente', component: ClienteComponent},
  { path: 'editarCliente/:id', component: EditarClienteComponent},
  { path: 'adiconarProduto', component: CadastroProdutoComponent},
  { path: 'listaProduto', component: ProdutoComponent},
  { path: 'editarProduto/:id', component: EditarProdutoComponent},
  { path: 'venda', component: VendaComponent},
  { path: 'sales/:id', component: SalesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
