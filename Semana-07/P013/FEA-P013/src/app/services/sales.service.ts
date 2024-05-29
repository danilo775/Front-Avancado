import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor(private http: HttpClient) {}

  saveSale(sale: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // Supondo que você tenha uma API para salvar vendas
      this.http.post<any>('https://p013-549ed-default-rtdb.firebaseio.com/vendas.json', sale)
        .subscribe(
          response => {
            console.log('Venda salva:', response);
            resolve(response);
          },
          error => {
            console.error('Erro ao salvar a venda:', error);
            reject(error);
          }
        );
    });
  }
}
