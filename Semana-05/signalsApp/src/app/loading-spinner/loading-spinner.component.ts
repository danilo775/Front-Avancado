import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
  isLoading = signal(false);

  constructor() {
    this.loadData();
  }

  loadData() {
    this.isLoading.set(true);
    //simula um processo de carregamento de dados
    setTimeout(() => {
      this.isLoading.set(false);
    }, 4000);
  }
}
