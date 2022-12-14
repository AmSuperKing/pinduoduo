import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductVariant } from '../domain';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}
  getProductVariantsByProductId(productId: string | any) {
    return this.http.get<ProductVariant[]>(
      `${environment.baseUrl}/productVariants.json`,
      {
        params: {
          _expand: 'product',
          _embed: 'productVariantImages',
          productId
        }
      }
    );
  }
}
