import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgFeatureTourModule } from './ng-feature-tour/ng-feature-tour.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, NgFeatureTourModule],
})
export class AppModule {}
