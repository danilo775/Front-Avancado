import { Injectable } from '@angular/core';

@Injectable()

export class IncrementoService {
  cliques = 0;
  constructor() { }
  incrementar() {
    this.cliques++;
  }
  decrementar() {
    this.cliques--;
  }
}
