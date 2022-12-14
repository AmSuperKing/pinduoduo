import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { DialogService } from './dialog';
import { TabItem } from './share/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedIndex$!: Observable<number | any>;
  
  constructor(private router: Router, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      // @ts-ignore
      filter(ev => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(tab => this.getSelectedIndex(tab))
    );
  }

  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
  }
  getSelectedIndex(tab: string) {
    return tab === 'recommend'
      ? 1
      : tab === 'category'
      ? 2
      : tab === 'chat'
      ? 3
      : tab === 'my'
      ? 4
      : 0;
  }

  removeDialog() {
    this.dialogService.close();
  }
}
