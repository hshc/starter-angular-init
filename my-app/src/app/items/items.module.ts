import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';

import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [
    ListItemsComponent,
    ItemComponent
  ],
  exports: [
    ListItemsComponent
  ]
})
export class ItemsModule { }
