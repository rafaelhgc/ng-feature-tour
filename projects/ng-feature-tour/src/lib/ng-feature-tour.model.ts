export interface StepBounds {
  x: number;
  y: number;
  scope: {
    y: number;
    x: number;
    width: number;
    height: number;
  };
}

export interface TourStep {
  target: string;
  title: string;
  description: string;
}
