import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
// pas besoin de supprimer cet import ItemsModule pour permettre le lazyloading
// puisque ces imports sont uniquement utilisés pour la transpilation qui génere le javascript
import { ItemsModule } from './items/items.module';
import { ItemsService } from './core/services/items/items.service';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';



// import { environment } from '../environments/environment';
import { environment } from '../environments/environment.prod';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    SharedModule,
    HomeModule,
    // on supprime ItemsModule pour permettre le lazyloading
    // ItemsModule,
    AppRoutingModule,
    PageNotFoundModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
