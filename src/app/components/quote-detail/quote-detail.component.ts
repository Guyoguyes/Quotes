import {Component, Input, OnInit} from '@angular/core';
import {Quote} from "../../model/quote";
import {UpvoteDirective} from "../../directive/upvote.directive";

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;

  constructor() { }

  likeQuote(){
    this.quote.upVote = this.quote.upVote + 1;
    const vote = this.quote.downVote
    const newVote = vote - 1
    if(newVote >= 1){
      return newVote
    }else{
      return 0
    }

  }

  dislikeQuote(){
    this.quote.downVote = this.quote.downVote + 1;
    const vote = this.quote.upVote;
    const newVote = vote - 1;
    if(newVote >= 1){
      return newVote
    }else{
      return 0
    }
  }

  ngOnInit() {
  }

}
