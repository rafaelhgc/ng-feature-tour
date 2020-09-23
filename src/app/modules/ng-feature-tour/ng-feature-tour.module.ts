import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

import { NgFeatureTourComponent } from './components/feature-tour/ng-feature-tour.component';
import { A11yPaginationDescriptionPipe } from './pipes/a11y-pagination-description.pipe';

@NgModule({
  declarations: [NgFeatureTourComponent, A11yPaginationDescriptionPipe],
  imports: [BrowserModule, A11yModule],
  exports: [NgFeatureTourComponent],
})
export class NgFeatureTourModule {}
