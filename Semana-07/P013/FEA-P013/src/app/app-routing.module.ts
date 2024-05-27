import { CadastroClienteComponent } from './components/cliente/cadastro-cliente/cadastro-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'adiconarCliente', component: CadastroClienteComponent},
  { path: 'listaCliente', component: ClienteComponent},
  { path: 'editarCliente/:id', component: EditarClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
