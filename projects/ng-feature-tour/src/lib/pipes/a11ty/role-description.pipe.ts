import { Pipe, PipeTransform } from '@angular/core';
import { FeatureTourStep } from '../../ng-feature-tour.model';

@Pipe({
  name: 'roleDescription',
})
export class RoleDescriptionPipe implements PipeTransform {
  transform(step: FeatureTourStep): string {
    return `${step.title}. ${step.description}.`;
  }
}
