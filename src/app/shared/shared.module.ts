import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
  CountDownComponent,
  FooterComponent,
  VerticalGridComponent,
  ProductCardComponent,
  ProductTileComponent,
  BackButtonComponent,
  ProductVariantDialogComponent,
  ProductAmountComponent
} from './components';
import {
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  TagDirective,
  AvatarDirective
} from './directives';
import { DialogModule } from '../dialog';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    VerticalGridComponent,
    CountDownComponent,
    FooterComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective
  ],
  imports: [CommonModule, FormsModule, DialogModule],
  exports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    VerticalGridComponent,
    GridItemDirective,
    CountDownComponent,
    ProductTileComponent,
    BackButtonComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    GridItemImageDirective,
    GridItemTitleDirective,
    FooterComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective
  ],
  entryComponents: [ ProductVariantDialogComponent ]
})
export class SharedModule {}