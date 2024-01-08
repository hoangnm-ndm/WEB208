import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent, AboutPageComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
