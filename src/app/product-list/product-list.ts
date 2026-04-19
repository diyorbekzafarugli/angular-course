import { Component, inject, signal } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductCard } from '../components/cards/product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [MatCardModule, MatGridListModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'], // 👈 SHU MUHIM
})
export class ProductList {
  products = signal<Product[]>([]);
  productService = inject(ProductService);

  productList = toSignal(this.productService.getProducts(), { initialValue: [] });
}
