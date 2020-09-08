import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

import { NgFeatureTourComponent } from './ng-feature-tour.component';

@NgModule({
  declarations: [NgFeatureTourComponent],
  imports: [BrowserModule, A11yModule],
  exports: [NgFeatureTourComponent],
})
export class NgFeatureTourModule {}
