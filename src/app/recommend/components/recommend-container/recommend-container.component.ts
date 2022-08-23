import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { HomeService } from 'src/app/home/services';
import { Ad, Product } from 'src/app/share';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.scss']
})
export class RecommendContainerComponent implements OnInit {

  ad$!: Observable<Ad | any>;

  products$!: Observable<Product[] | any>;

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.ad$ = this.service.getAdByTab('hot').pipe(
      filter(ads => ads.length > 0),
      map(ads => ads[Math.floor(Math.random() * 3)])
    )
    this.products$ = this.service.getProductsByTab('hot')
  }

}
