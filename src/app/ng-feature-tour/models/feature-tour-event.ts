import { FeatureTourStep } from './feature-tour-step';

export enum FeatureTourEventEnum {
  Start = 'START',
  Next = 'NEXT',
  Previous = 'PREVIOUS',
  Abort = 'ABORT',
  Done = 'DONE',
  Escape = 'ESCAPE',
}

export interface FeatureTourEvent {
  step: FeatureTourStep;
  event: FeatureTourEventEnum;
}
