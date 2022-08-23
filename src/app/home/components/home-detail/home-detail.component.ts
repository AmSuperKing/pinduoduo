import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, fromEvent, map, Observable, Subscription, switchMap } from 'rxjs';
import { Ad, Product } from 'src/app/share';

import {
  Channel,
  ImageSlider,
  ImageSliderComponent
} from 'src/app/share/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  @ViewChild(ImageSliderComponent) imgSliderRef!: ImageSliderComponent;
  @ViewChild('inputRef', {static: true}) inputRef!: ElementRef;
  
  imageSliders$!: Observable<ImageSlider[] | any>;

  channels$!: Observable<Channel[] | any>;


  selectedTabLink$!: Observable<string | null>;

  ad$!: Observable<Ad | any>;

  sub!: Subscription;

  products$!: Observable<Product[] | any>;

  startDate = new Date(2022,8,8)
  futureDate = new Date(2022,8,9)

  constructor(private route: ActivatedRoute, private service: HomeService) { }

  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      )
    this.sub = this.route.queryParamMap.subscribe(params => {
      // console.log('query参数', params);
    })
    this.channels$ = this.service.getChannels();
    this.imageSliders$ = this.service.getBanners();
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[Math.floor(Math.random() * 3)])
    )
    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductsByTab(tab))
    )
  }

  ngAfterViewInit(): void {
    // console.log('imgSliderRef', this.imgSliderRef);
    // fromEvent(this.inputRef.nativeElement, 'input').subscribe((e: any) => {
    //   console.log(e.target.value)
    // })
  }

  ngOnDestroy(): void {
    // 取消订阅， 不取消会有内存泄露
    this.sub.unsubscribe()
  }

}
