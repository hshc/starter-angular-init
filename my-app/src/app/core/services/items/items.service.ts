import { Injectable } from '@angular/core';
import { ITEMS } from './list';
import { Item } from '../../../shared/models/item.model';

@Injectable()
export class ItemsService {
  private collection: Item[] = ITEMS;

  constructor() { }

  getCollection(): Item[] {
    return this.collection;
  }
}
