import { Directive, Input, OnInit, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

  color;

  @HostListener('mouseenter') onHover(e) {
    this.addBackgroundColors(true);
  }
  @HostListener('mouseleave') onLeave(e) {
    this.addBackgroundColors(false);
  }

  constructor(private el: ElementRef) {
    console.log('my color is: ', this.color);
  }

  ngOnInit() {
    console.log('[ngOnInit] my color is: ', this.color);
  }

  private addBackgroundColors(show: boolean) {
    if (show) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = 'white';
    }
  }

}
