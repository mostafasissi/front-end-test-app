import { Component } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.interface';
import { ProductService } from 'src/app/data/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products!: Product[]; // Assurez-vous que le type correspond à votre modèle Product

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    console.log(this.products)
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  deleteProduct(id: number): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this product?');

    if (isConfirmed) {
    this.productService.deleteProduct(id)
      .subscribe(() => {
        // Mettez à jour la liste après la suppression
        this.getProducts();
      });
    }
  }
}
