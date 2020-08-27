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
