import { FeatureTourStep } from './models/feature-tour-step';

export enum EventEnum {
  Start = 'START',
  Next = 'NEXT',
  Previous = 'PREVIOUS',
  Abort = 'ABORT',
  Finish = 'FINISH',
  Escape = 'ESCAPE',
}

export interface Event {
  event: EventEnum;
  step: FeatureTourStep;
}

export interface LensBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface StepBounds {
  left: number;
  top: number;
  modifiers: string;
  lens: LensBounds;
}
