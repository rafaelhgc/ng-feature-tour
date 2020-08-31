import { Injectable, EventEmitter } from '@angular/core';

import { NgTourEvent } from '../models/ng-feature-tour-event.model';

@Injectable({ providedIn: 'root' })
export class NgFeatureTourService {
  onChange: EventEmitter<NgTourEvent>;

  constructor() {
    this.onChange = new EventEmitter<NgTourEvent>();
  }
}
