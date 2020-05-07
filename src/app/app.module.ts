import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteInfoComponent } from './components/quote-info/quote-info.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteInfoComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
