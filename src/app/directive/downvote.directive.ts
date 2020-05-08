import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDownvote]'
})
export class DownvoteDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('clicks') onClicks(){
    this.voteDeco('red')
  }

  @HostListener('dblclick') onDoubleClicks(){
    this.voteDeco('none')
  }

  private voteDeco(action: string){
    this.elem.nativeElement.style.color = action;
  }

}
