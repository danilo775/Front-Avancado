
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroClienteComponent } from './components/cliente/cadastro-cliente/cadastro-cliente.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HeaderComponent } from './components/header/header.component';

import { ProdutoComponent } from './components/produto/produto/produto.component';
import { CadastroProdutoComponent } from './components/produto/cadastro-produto/cadastro-produto.component';
import { RouterModule } from '@angular/router';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { FilterProdutoPipe } from './pipes/filter-produto.pipe';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';
import { VendaComponent } from './components/purchase/venda/venda.component';
import { SalesComponent } from './components/purchase/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroClienteComponent,
    ClienteComponent,
    FilterPipe,
    HeaderComponent,
    ClienteComponent ,
    EditarClienteComponent,
    ProdutoComponent,
    CadastroProdutoComponent,
    FilterProdutoPipe,
    EditarProdutoComponent,
    VendaComponent,
    SalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
