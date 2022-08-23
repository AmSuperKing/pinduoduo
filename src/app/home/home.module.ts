import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import {
  HomeContainerComponent,
  HomeDetailComponent
} from './components';

import { HomeRoutingModule } from './home-routing.module';
import { token } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent
  ],
  providers: [
    {
      provide: token,
      useValue: 'http://local.dev'
    }
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
