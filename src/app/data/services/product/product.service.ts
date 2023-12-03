import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL = 'http://localhost:3000/products'; 

  constructor(private http: HttpClient) { }

  // Get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  // Get a specific product by ID
  getProductById(id: number): Observable<Product> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<Product>(url);
  }

  // Create a new product
  createProduct(product: Product | any): Observable<Product> {
    return this.http.post<Product>(this.BASE_URL, product);
  }

  // Update a product by ID
  updateProduct(id: number, product: Product | any): Observable<Product> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.put<Product>(url, product);
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<Product> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete<Product>(url);
  }
}
