import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFeatureTourModule } from 'ng-feature-tour';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgFeatureTourModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
