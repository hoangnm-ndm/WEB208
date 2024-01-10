import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: '11',
      name: 'san pham 1',
      price: 1000,
      desc: 'mo ta san pham 1',
    },
    {
      id: '22',
      name: 'san pham 2',
      price: 2000,
      desc: 'mo ta san pham 1',
    },
  ];
}
