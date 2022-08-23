import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { TopMenu } from 'src/app/share/components';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HomeService,
    @Inject(token) private baseUrl: string
  ) { }
  topMenus$!: Observable<TopMenu[] | any>;
  selectedTabLink$!: Observable<string | null> | undefined;

  ngOnInit() {
    this.topMenus$ = this.service.getTabs();
    // console.log(this.baseUrl)
    this.selectedTabLink$ = this.route.firstChild?.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )
  }

  handleTabSelected(topMenu: TopMenu) {
    // console.log(topMenu);
    this.router.navigate(['home', topMenu.link]);
  }

}
