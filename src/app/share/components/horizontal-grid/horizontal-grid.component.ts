import { Component, Input, OnInit } from '@angular/core';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {
  @Input() cols = 8;
  @Input() dispalyCols = 5;
  sliderMargin = '0';

  constructor() { }

  ngOnInit() {}

  /**
   * 计算性属性 scrollable
   * 当 this.cols > this.dispalyCols 可滚动
   */
  public get scrollable(): boolean {
    return this.cols > this.dispalyCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  public get templateCols(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.dispalyCols * 0.4}rem) / ${this.dispalyCols}))`;
  }

  handleScroll(e: any) {
    this.sliderMargin = `0 ${100 * e.target.scrollLeft / e.target.scrollWidth}%`
  }

}
