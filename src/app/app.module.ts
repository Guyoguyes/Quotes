import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteInfoComponent } from './components/quote-info/quote-info.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { DayCounterPipe } from './pipe/day-counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteInfoComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    DayCounterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
