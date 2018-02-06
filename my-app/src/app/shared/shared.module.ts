import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    NavComponent,
    StateDirective,
  ],
  exports: [
    NavComponent,
    StateDirective,
  ],
})
export class SharedModule { }
