import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ITEMS } from './list';
import { Item } from '../../../shared/models/item.model';


@Injectable()
export class ItemsService {
  // private collection: Item[] = ITEMS;
  // getCollection(): Item[] {
  //   return this.collection;
  // }

  // ajout du service firebase -------------------------------------------------
  private itemsCollection: AngularFirestoreCollection<Item>;
  collection$: Observable<Item[]>;

  // injection de dépendance sur AngularFirestore
  constructor(private afs: AngularFirestore) {
    // see https://console.firebase.google.com/project/angularnico/database
    this.itemsCollection = afs.collection<Item>('collection'); // collection : nom ne notre base firebase
    this.setCollection(this.itemsCollection.valueChanges());
  }

  getCollection(): Observable<Item[]> {
    return this.collection$;
  }

  setCollection(collection: Observable<Item[]>) {
    this.collection$ = collection;
  }
  // -----------------------------------------------------------------------------
}
