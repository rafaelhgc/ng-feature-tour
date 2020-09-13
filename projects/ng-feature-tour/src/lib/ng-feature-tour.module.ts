import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

import { NgFeatureTourComponent } from './components/feature-tour/ng-feature-tour.component';

import { AriaDescriptionPipe } from './pipes/aria-description.pipe';
import { AriaLabelPipe } from './pipes/aria-label.pipe';
import { IdentifyPipe } from './pipes/identify.pipe';

@NgModule({
  declarations: [
    NgFeatureTourComponent,
    AriaDescriptionPipe,
    AriaLabelPipe,
    IdentifyPipe,
  ],
  imports: [BrowserModule, A11yModule],
  exports: [NgFeatureTourComponent],
})
export class NgFeatureTourModule {}
