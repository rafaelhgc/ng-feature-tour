import { Pipe, PipeTransform } from '@angular/core';
import { Step } from '../ng-feature-tour.model';

@Pipe({ name: 'ariaDescription' })
export class AriaDescriptionPipe implements PipeTransform {
  transform(step: Step): string {
    return `${step.title}. ${step.description}.`;
  }
}
