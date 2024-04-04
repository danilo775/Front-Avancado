import { Component } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { IncrementoService } from './incremento.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    AuthFormComponent,
    CommonModule, 
    RouterOutlet, 
    RouterLink,   
    RouterLinkActive,
    RouterModule
  ],

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IncrementoService]
})
export class AppComponent {
  title = 'standaloneComps';
  contador = 0;

  constructor(private incrementoService: IncrementoService) {
  }
  onInc() {
    this.incrementoService.incrementar();
    this.contador = this.incrementoService.cliques;
  }

  onDec() {
    this.incrementoService.decrementar();
    this.contador = this.incrementoService.cliques;
  } 
}
