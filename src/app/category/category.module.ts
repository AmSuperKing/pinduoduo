import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryContainerComponent } from './components';


@NgModule({
  declarations: [
    CategoryContainerComponent
  ],
  imports: [
    ShareModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
