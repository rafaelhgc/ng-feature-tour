import { Injectable, EventEmitter } from '@angular/core';

import { NgTourEvent } from '../models/ng-feature-tour-event.model';

@Injectable({ providedIn: 'root' })
export class NgTourEventService {
  onChange: EventEmitter<NgTourEvent>;
  initialize: EventEmitter<void>;

  constructor() {
    this.onChange = new EventEmitter<NgTourEvent>();
    this.initialize = new EventEmitter<void>();
  }
}
