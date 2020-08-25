import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgFeatureTourComponent } from './ng-feature-tour.component';

@NgModule({
  declarations: [NgFeatureTourComponent],
  imports: [BrowserModule],
  exports: [NgFeatureTourComponent],
})
export class NgFeatureTourModule {}
