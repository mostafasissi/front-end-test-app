import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidenavBarComponent } from './layout/sidenav-bar/sidenav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { DetailProductComponent } from './pages/product/detail-product/detail-product.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdateProductComponent } from './pages/product/update-product/update-product.component';
import { UploadFileComponent } from './pages/media/upload-file/upload-file.component';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    SidenavBarComponent,
    CreateProductComponent,
    ProductListComponent,
    DetailProductComponent,
    DashboardComponent,
    UpdateProductComponent,
    UploadFileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    ReactiveFormsModule , 
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CanvasJSAngularChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
