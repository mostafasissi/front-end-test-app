import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/data/services/product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  productId!: number ; // Variable to store the product ID
  productForm = this.fb.group({
    name : ['' , Validators.required],
    price : [ 0 , Validators.required],
    category : [''] , 
    description : [''],
  })
  constructor(
    private fb : FormBuilder,
    private productService: ProductService,
    private router: Router , 
    private route : ActivatedRoute
    ){}
    ngOnInit(): void {
      // Get the product ID from the route parameters
      this.route.params.subscribe(params => {
          this.productId = +params['id']; 
  
        // Fetch the product details using the ID
        this.productService.getProductById(this.productId).subscribe((product) => {
          // Set the form values with the fetched product details
          this.productForm.patchValue({
            name: product.name,
            price: product.price,
            category: product.category,
            description: product.description,
          });
        });
      });
    }
  
  
  updateProduct(){
    this.productService.updateProduct(this.productId,this.productForm.value)
        .subscribe(() => {
          this.router.navigate(['/home/products']);
        });
  }
}
