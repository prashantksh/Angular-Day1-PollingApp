import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {
  constructor() {
    console.log('Applied');
  }

  @HostListener('click')
  onmouseover() {
    console.log('click');
  }

  @HostBinding('className')
  class = 'font-weight-bold';
}
