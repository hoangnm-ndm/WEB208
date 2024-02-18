import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product: Product = {
    title: '',
    price: 0,
    description: '',
    thumbnail: '',
  };
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.productService.getProduct(productId).subscribe((product) => {
        this.product = product;
      });
    }
  }
}
