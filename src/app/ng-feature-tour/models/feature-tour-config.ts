export interface FeatureTourStepConfig {
  target: string;
  title: string;
  description: string;
  a11y: {
    ariaDescription: string;
  };
}

export interface FeatureTourConfig {
  a11y: {
    ariaLabel: string;
    pagination: string;
  };
  steps: FeatureTourStepConfig[];
  controls: FeatureTourStepControlsConfig;
}

export interface FeatureTourStepControlsConfig {
  abort: string;
  previous: string;
  next: string;
  done: string;
}
