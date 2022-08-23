import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit{
  @Input() appGridItemImage = '2rem';
  @Input() fitMode = 'cover'

  constructor(private el: ElementRef, private rd2: Renderer2) { }

  ngOnInit(): void {
    this.setStyle('grid-area', 'image');
    this.setStyle('width', this.appGridItemImage);
    this.setStyle('height', this.appGridItemImage);
    this.setStyle('object-fill', this.fitMode);
  }

  private setStyle(styleName: string, styleValue: string) {
    this.rd2.setStyle(this.el.nativeElement, styleName, styleValue);
  }

  @HostListener('click', ['$event.target'])
  handleClick(e: any) {
    // console.log(e)
  }

}
