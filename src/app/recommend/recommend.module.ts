import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { RecommendContainerComponent } from './components';

import { RecommendRoutingModule } from './recommend-routing.module';


@NgModule({
  declarations: [
    RecommendContainerComponent
  ],
  imports: [
    ShareModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
