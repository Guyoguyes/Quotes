import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quote} from "../../model/quote";

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote('', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quote>()

  constructor() { }

  onSubmit(){
    this.addQuote.emit(this.newQuote)
  }

  ngOnInit() {
  }

}
