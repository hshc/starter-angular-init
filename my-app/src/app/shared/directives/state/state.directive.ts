import { Directive, Input, OnInit, HostBinding } from '@angular/core';
import { State } from '../../enums/state.enum';
import { NgOnChangesFeature } from '@angular/core/src/render3/definition';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit {
  @Input('appState') appState: State;
  @HostBinding('class') elementClass: String;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.appState);
    this.elementClass = this.formatClass(this.appState);
  }

  private removeAccent(state: String): String {
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // see http://stackoverflow.com/a/37511463
  }

  private formatClass(state: String): String {
    return `state-${this.removeAccent(state).toLowerCase().replace(' ', '-')}`;
  }

}
