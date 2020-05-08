import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Quote} from "../model/quote";

@Directive({
  selector: '[appUpvote]'
})
export class UpvoteDirective {

  // @Input() quote: Quote

  constructor(private elemRef: ElementRef) { }

  @HostListener('click') onClicks(){
    this.voteDeco('blue');

  }

  @HostListener('dblclick') onDoubleClicks(){
    this.voteDeco('none');
  }

  private voteDeco(action: string){
    this.elemRef.nativeElement.style.color = action;
  }

}
