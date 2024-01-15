import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StartComponent } from './components/start/start.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '/', component: HomePageComponent },
  { path: '/about', component: AboutPageComponent },
  { path: '/contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    StartComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
