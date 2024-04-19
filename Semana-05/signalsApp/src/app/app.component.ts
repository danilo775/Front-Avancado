import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
export interface Aviao {
  modelo: string;
  autonomia: string;
  qdeMotores: number;
  preco: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, LoadingSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signalsApp';

  nome = signal('Zupeto');
  sobrenome = signal('Voador');
  nomeCompleto = computed(() => this.nome() + ' ' + this.sobrenome());
  idade = signal(28);
  ehAdulto = computed(() => this.idade() >= 18);

  quantidade = signal(1);

  qtyDisponivel = signal([1, 2, 3, 4, 5, 6]);

  AviaoSelecionado = signal<Aviao>({ 
      modelo: 'P51',
      autonomia: '1000km', 
      qdeMotores: 2,
      preco: 1000.00
  });

 

  precoTotal = computed(() => this.AviaoSelecionado().preco * this.quantidade());




  avioes = signal<Aviao[]>([]);

  constructor() {
    console.log('AppComponent constructor');

     const a = signal(3);
    const b = signal(5);
    const c = computed(() => a() + b());
    console.log('O resultado da soma é: ' + c()); // 8

    a.set(4);
    console.log('O resultado da soma é: ' + c()); // 9

    const count = signal(0);
    //Signals são funções getter - chamá-los lê seu valor.
    console.log('O contador é: ' + count());  

    


    effect(() => console.log(this.AviaoSelecionado()));

    effect(() => {
      console.log(`Nome Completo: ${this.nomeCompleto()}`);
      console.log(`é Adulto: ${this.ehAdulto()}`);
    });


  }

  onQuantidadeSelecionada(qty: number) {
    this.quantidade.set(qty);

    this.quantidade.set(10);

    this.quantidade.set(20);

  //atualiza o valor com base no valor atual
    this.quantidade.update(qty => qty * 2);



  }

  nomeSobreNomeSignalExample() {  
    this.nome.set('Doriana');
    this.sobrenome.set('da Silva');
  }

  alteraSignals() {
    this.nome.set('Chucrute');
  }
}
