import { Component, Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() item!: Product;
}
