import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatContainerComponent } from './components';


@NgModule({
  declarations: [
    ChatContainerComponent
  ],
  imports: [
    ShareModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
