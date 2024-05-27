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
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { CadastroPordutoComponent } from './components/produto/cadastro-porduto/cadastro-porduto.component';
import { ProdutoComponent } from './components/produto/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroClienteComponent,
    ClienteComponent,
    FilterPipe,
    HeaderComponent,
    EditarClienteComponent,
    CadastroPordutoComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
