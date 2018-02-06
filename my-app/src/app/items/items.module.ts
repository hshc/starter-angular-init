import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';

import { ListItemsComponent } from './containers/list-items/list-items.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [
    ListItemsComponent
  ],
  exports: [
    ListItemsComponent
  ]
})
export class ItemsModule { }
