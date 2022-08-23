import { NgModule } from '@angular/core';
import { CloseDialogDirective } from '../dialog';
import { ShareModule } from '../share/share.module';
import {
  ConfirmOrderComponent,
  GroupItemComponent,
  GroupShortListComponent,
  PaymentComponent,
  ProductAmountComponent,
  ProductContainerComponent,
  ProductVariantDialogComponent,
} from './components';

import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    ConfirmOrderComponent,
    PaymentComponent,
    CloseDialogDirective
  ],
  imports: [
    ShareModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
