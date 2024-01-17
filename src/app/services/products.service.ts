import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any[] = [];
  url = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    this.httpClient.get(this.url).subscribe((data) => {
      console.log(data);
    });
  }
}
