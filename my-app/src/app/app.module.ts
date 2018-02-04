import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Router, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(router: Router) {
  //   if (!environment.production) {
  //     console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  //   }
  // }
}
