export enum FeatureTourEventEnum {
  Start = 'START',
  Next = 'NEXT',
  Previous = 'PREVIOUS',
  Abort = 'ABORT',
  Finish = 'FINISH',
  Escape = 'ESCAPE',
}

export interface FeatureTourStepArias {
  id: string;
  title: string;
  description: string;
  label: string;
}

export interface FeatureTourEvent {
  event: FeatureTourEventEnum;
  step: FeatureTourStep;
}

export interface FeatureTourStep {
  target: string;
  title: string;
  description: string;
  enabled?: boolean;
  visible?: boolean;
  bounds?: FeatureTourStepBounds;
  arias?: FeatureTourStepArias;
}

export interface FeatureTourStepBounds {
  left: number;
  top: number;
  modifiers: string;
  lens: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}

export interface FeatureTourSetup {
  a11ty: string;
  initialStep: string;
  controls: {
    abort: string;
    previous: string;
    next: string;
    done: string;
  };
}
