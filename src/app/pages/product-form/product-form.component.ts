// product-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    title: '',
    price: 0,
    description: '',
    thumbnail: '',
  };

  isEditMode: boolean = false;
  productForm: FormGroup;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      title: [this.product.title, Validators.required],
      price: [this.product.price, [Validators.required, Validators.min(0)]],
      description: [this.product.description],
      thumbnail: [this.product.thumbnail],
    });
  }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.isEditMode = true;
      this.productService.getProduct(productId).subscribe((product) => {
        this.product = product;
        this.productForm.setValue({
          title: this.product.title,
          price: this.product.price,
          description: this.product.description,
          thumbnail: this.product.thumbnail,
        });
      });
    }
  }

  saveProduct() {
    // Kiểm tra xem FormGroup có hợp lệ không
    if (this.productForm.valid) {
      // Lấy giá trị từ FormGroup
      const formValue = this.productForm.value;

      // Gán giá trị từ FormGroup vào đối tượng product
      this.product.title = formValue.title;
      this.product.price = formValue.price;
      this.product.description = formValue.description;
      this.product.thumbnail = formValue.thumbnail;

      if (this.isEditMode) {
        this.productService.updateProduct(this.product).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.productService.addProduct(this.product).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}
