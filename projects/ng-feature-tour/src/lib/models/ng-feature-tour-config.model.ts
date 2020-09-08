import { NgTourStep } from './ng-feature-tour-step.model';

export interface NgTourConfigControl {
  label: string;
}

export interface NgTourConfig {
  steps: NgTourStep[];
  controls: {
    abort: NgTourConfigControl;
    previous: NgTourConfigControl;
    next: NgTourConfigControl;
    done: NgTourConfigControl;
  };
  lastTarget?: string;
  bounds?: {
    maxWidth: number;
  }
}
