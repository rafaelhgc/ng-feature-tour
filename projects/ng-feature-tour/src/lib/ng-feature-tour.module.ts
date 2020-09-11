import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

import { NgFeatureTourComponent } from './ng-feature-tour.component';
import { RoleDescriptionPipe } from './pipes/a11ty/role-description.pipe';
import { AriaLabelPipe } from './pipes/a11ty/aria-label.pipe';
import { IdentifyPipe } from './pipes/a11ty/identify.pipe';

@NgModule({
  declarations: [
    NgFeatureTourComponent,
    RoleDescriptionPipe,
    AriaLabelPipe,
    IdentifyPipe,
  ],
  imports: [BrowserModule, A11yModule],
  exports: [NgFeatureTourComponent],
})
export class NgFeatureTourModule {}
