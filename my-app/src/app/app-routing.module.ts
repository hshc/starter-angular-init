import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// see "https://angular.io/guide/router"

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' // permet de récupérer l'ensemble ou une section de l'url
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
