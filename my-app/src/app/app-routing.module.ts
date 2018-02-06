import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ItemsModule } from './items/items.module';

// see "https://angular.io/guide/router"

const appRoutes: Routes = [
  {
    // mise en place lazyloading
    path: 'items', loadChildren: 'app/items/items.module#ItemsModule'
    // fin lazyLoading
  },
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
      {preloadingStrategy: PreloadAllModules}, // precharge les modules lazyloading en tache de fond
      // { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
