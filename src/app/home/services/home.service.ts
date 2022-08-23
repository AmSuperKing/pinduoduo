import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ad, Product } from 'src/app/share';
import { Channel, ImageSlider, TopMenu } from 'src/app/share/components';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getTabs() {
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs.json`);
  }
  getChannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels.json`);
  }
  getBanners() {
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners.json`);
  }
  getAdByTab(tab: string | any) {
    return this.http.get<Ad[]>(`${environment.baseUrl}/ads.json`, {
      params: { categories_like: tab }
    });
  }
  getProductsByTab(tab: string | any) {
    return this.http.get<Product[]>(`${environment.baseUrl}/products.json`, {
      params: { categories_like: tab }
    });
  }
}
