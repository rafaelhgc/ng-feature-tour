import { Injectable, EventEmitter } from '@angular/core';

import { FeatureTourEvent } from './ng-feature-tour.model';

@Injectable({ providedIn: 'root' })
export class FeatureTourService {
  onChange: EventEmitter<FeatureTourEvent>;
  initialize: EventEmitter<string>;

  constructor() {
    this.onChange = new EventEmitter<FeatureTourEvent>();
    this.initialize = new EventEmitter<string>();
  }
}
