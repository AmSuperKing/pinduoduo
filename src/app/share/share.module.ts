import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CountDownComponent,
  FooterComponent,
  HorizontalGridComponent,
  ImageSliderComponent,
  ProductCardComponent,
  ProductTileComponent,
  ScrollableTabComponent,
  VerticalGridComponent,
  BackButtonComponent
} from './components';
import {
  AvatarDirective,
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  TagDirective,
} from './directives';
import { AgoPipe } from './pipes';
import { DialogModule } from '../dialog';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ]
})
export class ShareModule { }
