import { Injectable } from '@angular/core';
import { ITEMS } from './list';

@Injectable()
export class ItemsService {
  private collection: any = ITEMS;

  constructor() { }

  getCollection(): any {
    return this.collection;
  }
}
