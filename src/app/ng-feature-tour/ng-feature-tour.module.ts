import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

import { NgFeatureTourComponent } from './components/feature-tour/ng-feature-tour.component';
import { A11yPaginationDescriptionPipe } from './pipes/a11y-pagination-description.pipe';
import { FeatureTourStepComponent } from './components/feature-tour-step/feature-tour-step.component';

@NgModule({
  declarations: [NgFeatureTourComponent, A11yPaginationDescriptionPipe, FeatureTourStepComponent],
  imports: [BrowserModule, A11yModule],
  exports: [NgFeatureTourComponent],
})
export class NgFeatureTourModule {}
