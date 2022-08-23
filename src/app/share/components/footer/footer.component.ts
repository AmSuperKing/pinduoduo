import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabItem } from '../../domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  tabItems: TabItem[] = [
    {
      title: '首页',
      icon: '/assets/tabs/home.png',
      selectedIcon: '/assets/tabs/homeSelected.png',
      link: 'home'
    },
    {
      title: '推荐',
      icon: '/assets/tabs/recommend.png',
      selectedIcon: '/assets/tabs/recommendSelected.png',
      link: 'recommend'
    },
    {
      title: '分类',
      icon: '/assets/tabs/category.png',
      selectedIcon: '/assets/tabs/categorySelected.png',
      link: 'category'
    },
    {
      title: '聊天',
      icon: '/assets/tabs/chat.png',
      selectedIcon: '/assets/tabs/chatSelected.png',
      link: 'chat'
    },
    {
      title: '个人中心',
      icon: '/assets/tabs/my.png',
      selectedIcon: '/assets/tabs/mySelected.png',
      link: 'my'
    }
  ];
  @Input() selectedIndex = 0;
  @Output() tabSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSelectedTab(idx: number) {
    this.selectedIndex = idx;
    this.tabSelected.emit(this.tabItems[idx]);
  }

}
