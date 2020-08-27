export enum EventEnum {
  Start = 'START',
  Next = 'NEXT',
  Previous = 'PREVIOUS',
  Abort = 'ABORT',
  Finish = 'FINISH',
}

export interface TourStep {
  target: string;
  title: string;
  description: string;
}

export interface TourEvent {
  event: EventEnum;
  stepTrack: string[];
  currentStep: string;
}

export interface StepBounds {
  yPosition: 'to-bottom' | 'to-top';
  xPosition: 'to-left' | 'to-right';
  x: number;
  y: number;
  maxWidth: number;
}

export interface LensBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}
