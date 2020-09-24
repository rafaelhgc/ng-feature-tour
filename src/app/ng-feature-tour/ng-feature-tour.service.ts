import { Injectable, EventEmitter } from '@angular/core';

import { Event, Setup } from './ng-feature-tour.model';

@Injectable({ providedIn: 'root' })
export class FeatureTourService {
  onChange: EventEmitter<Event>;
  initialize: EventEmitter<Setup>;

  constructor() {
    this.onChange = new EventEmitter<Event>();
    this.initialize = new EventEmitter<Setup>();
  }
}
