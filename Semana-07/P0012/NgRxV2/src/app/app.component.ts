import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { helloStore } from './store/hello.store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'helloWorld';
  readonly helloStore = inject(helloStore);

  copiar(valor: string){
    this.helloStore.copiar(valor);

   
    
  }

  multi(){
    const observable: Observable<any> = of(1,2,3,4,5); 
    this.helloStore.multiplicaPor2(observable);
  }

}
