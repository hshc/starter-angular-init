import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';
// import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(router: Router) {
  //   if (!environment.production) {
  //     console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  //   }
  // }
}
