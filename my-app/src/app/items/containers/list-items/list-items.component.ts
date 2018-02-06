import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../core/services/items/items.service';
import { Item } from '../../../shared/models/item.model';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit, OnDestroy {


  collection$: Observable<Item[]>;
  subscription: Subscription;
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.collection$ = this.itemsService.getCollection();
    this.subscription = this.collection$.subscribe((data) => {
      console.log(data);
    });
    // console.log(this.collection);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
