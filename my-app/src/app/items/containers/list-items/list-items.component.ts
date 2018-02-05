import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../core/services/items/items.service';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  collection: Item[];
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.collection = this.itemsService.getCollection();
    console.log(this.collection);
  }

}
