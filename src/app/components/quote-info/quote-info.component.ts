import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quote} from "../../model/quote";

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('John','Stephen King', 'I try to create sympathy for my characters, then turn the monsters loose.', new Date(2020, 3, 23)),
    new Quote('Doe' , 'Ernest Hemingway', 'Prose is architecture, not interior decoration.', new Date(2019, 8,24)),
    new Quote('Brian', 'Prose is architecture, not interior decoration.', 'To produce a mighty book, you must choose a mighty theme.', new Date(2016, 13, 30)),
    new Quote('Amisi', 'C. J. Cherryh', 'It is perfectly okay to write garbage—as long as you edit brilliantly.', new Date(2018, 10, 27))
    ]



  constructor() { }



  addQuote(quote){
    this.quotes.push(quote)
  }

  toggleQuote(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(index){
    let isDelete = confirm(`Are You sure you want to delete ${this.quotes[index].quote}`);
    if (isDelete) {
      this.quotes.splice(index, 1);
    }
  }

  ngOnInit() {
  }

}
