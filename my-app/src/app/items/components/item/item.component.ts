import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  // création de l'input item qui permet de passer une variable au composent html
  // "item.component.html" malgré la problématique du shadow DOM qui isole les DOM
  // des composants (see. list-items.component.html)
  @Input() item: Item;

  // pour faire une indirection suplémentaire dans le html avec
  // <app-item [toto]="htmlItem"></app-item> lors de l'appel :
  // @Input('toto') item: Item;


  constructor() { }

  ngOnInit() {
  }

}
