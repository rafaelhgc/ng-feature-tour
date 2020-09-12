import { Pipe, PipeTransform } from '@angular/core';
import { Step } from '../ng-feature-tour.model';

@Pipe({ name: 'identify' })
export class IdentifyPipe implements PipeTransform {
  transform(step: Step, prefix: string = 'ft-step'): string {
    return `${prefix}-${step.target}`;
  }
}
