import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFeatureTourModule } from './modules/ng-feature-tour/ng-feature-tour.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgFeatureTourModule, NgFeatureTourModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
