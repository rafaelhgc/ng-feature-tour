export interface LensBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface StepBounds {
  left: number;
  top: number;
  maxWidth: number;
  modifierClasses: string;
}

export interface TourBounds {
  step: StepBounds;
  lens: LensBounds;
}
