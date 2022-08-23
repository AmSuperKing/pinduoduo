import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { MyContainerComponent } from './components';

import { MyRoutingModule } from './my-routing.module';


@NgModule({
  declarations: [
    MyContainerComponent
  ],
  imports: [
    ShareModule,
    MyRoutingModule
  ]
})
export class MyModule { }
