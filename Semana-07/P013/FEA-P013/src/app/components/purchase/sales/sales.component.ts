import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService } from '../../../services/sales.service';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../model/produto.model';
// Assuming you have a service for clients
import { BancoService } from '../../../services/banco.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit {
  products: Produto[] = [];
  selectedProduct: Produto | null = null;
  quantity: number = 1;
  cart: any[] = [];
  subTotal: number = 0;
  discount: number = 0;
  totalSale: number = 0;
  saleDate: string = '';
  saleType: string = 'avista';
  clienteNome: string = '';
  clienteCpf: string = '';
  clienteId: string | null = null;


  constructor(
    private salesService: SalesService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private clienteService: BancoService,
    private rotas: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.route.params.subscribe(params => {
      this.clienteId = params['id'];
      this.clienteId = params['id'] !== null ? params['id'] : ''; // Check for null before assignment

    });
  }

  loadProducts() {
    this.produtoService.getProdutos().subscribe(products => {
      this.products = products;
    });
  }

  loadCliente(id: string) {
    this.clienteService.getClienteId(id).subscribe(cliente => {
      this.clienteNome = cliente.nome;
      this.clienteCpf = cliente.cpf;
    });
  }

  addProduct() {
    if (this.selectedProduct && this.quantity > 0) {
      const item = {
        product: this.selectedProduct,
        quantity: this.quantity
      };
      this.cart.push(item);
      this.updateTotals();
    }
  }

  removeProduct(item: any) {
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.updateTotals();
    }
  }

  updateTotals() {
    console.log('Cart:', this.cart);
    this.subTotal = this.cart.reduce((sum, item) => {
      console.log('Item:', item);
      console.log('Price:', item.product.preco_vista);
      console.log('Quantity:', item.quantity);
      return sum + item.product.preco_vista * item.quantity;
    }, 0);
    console.log('Subtotal:', this.subTotal);
    this.totalSale = this.subTotal - this.discount;
  }



  concludeSale() {
    const saleData = {
      cliente: {
        id: this.clienteId,
        nome: this.clienteNome,
        cpf: this.clienteCpf
      },
      date: this.saleDate,
      saleType: this.saleType,
      subTotal: this.cart.reduce((sum, item) => sum + item.product.preco_vista * item.quantity, 0),
      discount: this.discount,
      totalSale: this.cart.reduce((sum, item) => sum + item.product.preco_vista * item.quantity, 0) - this.discount,
      items: this.cart
    };

    this.salesService.saveSale(saleData).then(() => {
      // Reset the form
      this.cart = [];
      this.subTotal = 0;
      this.discount = 0;
      this.totalSale = 0;
      this.saleDate = '';
      this.saleType = 'avista';
      this.clienteNome = '';
      this.clienteCpf = '';
    });

    this.rediracionaPrincipal();
  }

  rediracionaPrincipal() {
    setTimeout(() => {
      this.rotas.navigate(['listaCliente']);
    }, 2000);
  }

}
