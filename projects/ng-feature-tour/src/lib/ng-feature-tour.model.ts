export interface TourStep {
  target: string;
  title: string;
  description: string;
}

export interface TourEvent {
  event: 'PREVIOUS' | 'NEXT' | 'ABORT' | 'FINISH';
  targetTrack: string[];
}
