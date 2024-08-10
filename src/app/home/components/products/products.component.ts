import { Component } from '@angular/core';
import { ProductsStoreItem } from '../../services/products/products.storeItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(public productsStore: ProductsStoreItem) {}

}