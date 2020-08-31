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
