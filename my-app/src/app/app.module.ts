import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// import { environment } from '../environments/environment.prod';


@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule,
    SharedModule,
    HomeModule
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
