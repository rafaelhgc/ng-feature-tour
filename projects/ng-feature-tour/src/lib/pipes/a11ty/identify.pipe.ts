import { Pipe, PipeTransform } from '@angular/core';
import { FeatureTourStep } from '../../ng-feature-tour.model';

@Pipe({
  name: 'identify',
})
export class IdentifyPipe implements PipeTransform {
  transform(step: FeatureTourStep, prefix: string = 'ft-step'): string {
    return `${prefix}-${step.target}`;
  }
}
