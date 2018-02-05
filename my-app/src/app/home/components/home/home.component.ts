import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Bienvenue sur cette formation angular 5';
    // cycle de vie du composant Angular (see lifecycle hooks)
  }

}
