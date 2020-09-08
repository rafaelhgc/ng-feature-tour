import { NgTourStep } from './ng-feature-tour-step.model';

export enum NgTourEventEnum {
  Start = 'START',
  Next = 'NEXT',
  Previous = 'PREVIOUS',
  Abort = 'ABORT',
  Finish = 'FINISH',
  Escape = 'ESCAPE',
}

export interface NgTourEvent {
  event: NgTourEventEnum;
  step: NgTourStep;
}
