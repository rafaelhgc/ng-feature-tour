import { Injectable, EventEmitter } from '@angular/core';

import { FeatureTourEvent, FeatureTourSetup } from './ng-feature-tour.model';

@Injectable({ providedIn: 'root' })
export class FeatureTourService {
  onChange: EventEmitter<FeatureTourEvent>;
  initialize: EventEmitter<FeatureTourSetup>;

  constructor() {
    this.onChange = new EventEmitter<FeatureTourEvent>();
    this.initialize = new EventEmitter<FeatureTourSetup>();
  }
}
