import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})

/**
 * 接口是可选的，也就是说只要有类似 ngOnInit 这样的方法
 * 生命周期的钩子还是正常执行
 * 但建议实现接口，好处之一是不会由于误删某个钩子函数
 * 另一个好处是对组件涉及到哪些生命周期一目了然
 */
export class ScrollableTabComponent implements
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() selectedTabLink!: string | null | undefined;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = '#ff0000';
  @Input() titleColor = '#333';
  @Input() indicatorColor = '#ff0000';
  @Output() tabSelected = new EventEmitter();

  /**
   * 构造函数永远首先被调用
   */
  constructor() {
    // console.log('构造函数被调用');
  }

  /** 
   * 在组件的 `@Input`属性发生变化的时候调用，会被调用多次
   * @param changes 是索引对象，key是属性的名字，value是SimpleChanges
   */
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('输入属性改变', changes);
  }

  /**
   * 组件初始化完成
   * 在这个钩子函数中，可以安全的使用属性和方法
   * 只调用一次
   */
  ngOnInit(): void {
    // console.log('组件初始化');
  }

  /**
   * 组件内容初始化
   * 只调用一次
   */
  ngAfterContentInit():void {
    // console.log('组件内容初始化');
  }

  /**
   * 组件内容脏值检测
   * 会被调用多次
   */
  ngAfterContentChecked(): void {
    // console.log('组件内容脏值检测');
  }

  /**
   * 组件的视图初始化
   */
  ngAfterViewInit(): void {
    // console.log('组件视图初始化');
  }

  /**
   * 组件视图脏值检测
   */
  ngAfterViewChecked(): void {
    // console.log('组件视图脏值检测');
  }

  /**
   * 组件销毁，进行一些清理工作
   */
  ngOnDestroy(): void {
    // console.log('组件销毁');
  }

  /**
   * 顶部tabMenu点击处理
   * @param index 
   */
  handleSelection(index: number) {
    this.tabSelected.emit(this.menus[index]);
  }

}
