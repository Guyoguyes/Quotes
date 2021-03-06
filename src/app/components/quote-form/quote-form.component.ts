import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quote} from "../../model/quote";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote('', '', '', new Date());
  quotes: { quote: string; author: string; submitterName: string; postedDate: null };
  @Output() addQuote = new EventEmitter<Quote>();

  // orginalSettings: Quote;
k
  constructor() { }

  onSubmit(form: NgForm){
    this.addQuote.emit(this.newQuote)
    // form.resetForm(this.orginalSettings)
  }



  ngOnInit() {
  }

}
