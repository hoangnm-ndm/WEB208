import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminProductListComponent } from './pages/admin/admin-product-list/admin-product-list.component';
import { StartComponent } from './components/start/start.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'admin', component: AdminProductListComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminProductListComponent,
    StartComponent,
    ContactComponent,
    ShopPageComponent,
    NotFoundPageComponent,
    ProductFormComponent,
    ProductListComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
