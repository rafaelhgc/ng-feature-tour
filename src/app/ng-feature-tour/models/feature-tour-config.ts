export interface FeatureTourStepConfig {
  target: string;
  title: string;
  description: string;
  a11y: {
    ariaDescription: string;
  };
}
export interface FeatureTourConfig {
  firstTarget: string;
  a11y: {
    ariaLabel: string;
    pagination: string;
  };
  steps: FeatureTourStepConfig[];
}
