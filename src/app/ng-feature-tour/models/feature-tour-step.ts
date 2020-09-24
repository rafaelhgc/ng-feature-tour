export interface FeatureTourStepControl {
  label: string;
  enabled: boolean;
}

export interface FeatureTourStep {
  id: string;
  target: string;
  index: number;
  total: number;
  title: string;
  description: string;
  enabled: boolean;
  a11y: {
    ariaDescription: string;
    ariaLabel: string;
    pagination: string;
  };
  controls: {
    abort: FeatureTourStepControl;
    previous: FeatureTourStepControl;
    next: FeatureTourStepControl;
    done: FeatureTourStepControl;
  };
  rect?: {
    left: number;
    top: number;
    modifiers: string;
  };
}
