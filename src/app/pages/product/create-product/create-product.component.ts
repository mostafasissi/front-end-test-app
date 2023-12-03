import { Component } from '@angular/core';
import { ProductService } from 'src/app/data/services/product/product.service';
import {Validators , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  productForm = this.fb.group({
    name : ['' , Validators.required],
    price : ['' , Validators.required],
    category : [''] , 
    description : [''],
  })
  constructor(
    private fb : FormBuilder,
    private productService: ProductService,
    private router: Router
    ){}

    addProduct(): void {
      this.productService.createProduct(this.productForm.value)
        .subscribe(() => {
          // After adding, navigate to the product list or perform other actions
          this.router.navigate(['/home/products']);
        });
    }
}
