import { Component, inject, signal } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products = signal<Product[]>([]);
  productService = inject(ProductService);

  productList = toSignal(this.productService.getProducts(), { initialValue: [] });
  // constructor() {
  //   this.productService.getProducts().subscribe({
  //     next: (data) => {
  //       this.products.set(data);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching products:', err);
  //     }
  //   });
  // }
}
