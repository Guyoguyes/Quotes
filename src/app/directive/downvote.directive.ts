import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDownvote]'
})
export class DownvoteDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('click') onClicks(){
    this.voteDec('red');
  }

  @HostListener('dblclick') onDoubleClicks(){
    this.voteDec('none');
  }

  private voteDec(action: string){
    this.elem.nativeElement.style.color = action;
  }

}
