import { Component, Injectable, Injector, OnInit } from '@angular/core';

@Injectable()
export class Product {
  constructor() {

  }
}

@Injectable()
export class PurchaseOrder {
  private product!: Product;
  private amount!: number;
  constructor() {}
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.scss']
})
export class HomeGrandComponent implements OnInit {
  obj = {
    productId: 2,
    productName: '手机',
    model: 'pro',
    type: '曲面屏'
  };
  today: Date | null = null;
  price!: number;
  str = 'abcdefg';
  arr = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
    this.today = this.minusDays(new Date(), 60);
    this.price = 456.78
    const injector = Injector.create({
      providers: [
        {
          provide: Product,
          deps: [] // 描述依赖性
        },
        {
          provide: PurchaseOrder,
          deps: [Product]
        }
      ]
    });
    // console.log(injector.get(Product));
    // console.log(injector.get(PurchaseOrder));
  }

  minusDays(date: Date, days: number) {
    const res = new Date(date);
    res.setDate(res.getDate() - days);
    return res;
  }

}
