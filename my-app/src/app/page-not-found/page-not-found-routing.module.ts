import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [],
  exports: [
    RouterModule,
  ],
})
export class PageNotFoundRoutingModule { }
