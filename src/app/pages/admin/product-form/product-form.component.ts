// product-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    title: '',
    price: 0,
    description: '',
    thumbnail: '',
  };
  isEditMode: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.isEditMode = true;
      this.productService.getProduct(productId).subscribe((product) => {
        this.product = product;
      });
    }
  }

  saveProduct() {
    if (this.isEditMode) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.router.navigate(['/admin']);
      });
    } else {
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/admin']);
      });
    }
  }
}
