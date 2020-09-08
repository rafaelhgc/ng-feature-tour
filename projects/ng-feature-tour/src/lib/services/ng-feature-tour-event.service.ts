import { Injectable, EventEmitter } from '@angular/core';

import { NgTourEvent } from '../models/ng-feature-tour-event.model';
import { NgTourConfig } from '../models/ng-feature-tour-config.model';

@Injectable({ providedIn: 'root' })
export class NgTourEventService {
  onChange: EventEmitter<NgTourEvent>;
  initialize: EventEmitter<NgTourConfig>;

  constructor() {
    this.onChange = new EventEmitter<NgTourEvent>();
    this.initialize = new EventEmitter<NgTourConfig>();
  }
}
