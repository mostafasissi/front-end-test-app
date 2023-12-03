import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { DetailProductComponent } from './pages/product/detail-product/detail-product.component';
import { UpdateProductComponent } from './pages/product/update-product/update-product.component';
import { UploadFileComponent } from './pages/media/upload-file/upload-file.component';
import { AuthGuard } from './data/services/auth/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path : 'home',
    component : MainpageComponent,
    canActivate: [AuthGuard], // Add AuthGuard to protected routes
    children : [
      {
        path : 'dashboard' , 
        component :  DashboardComponent
      },
      {
        path : 'products' , 
        component : ProductListComponent
      },
      {
        path : 'products/new' , 
        component : CreateProductComponent
      },
      {
        path : 'products/:id',
        component : UpdateProductComponent
      },
      {
        path : 'files' , 
        component : UploadFileComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
