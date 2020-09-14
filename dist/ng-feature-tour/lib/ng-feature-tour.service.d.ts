import { EventEmitter } from '@angular/core';
import { Event, Setup } from './ng-feature-tour.model';
import * as i0 from "@angular/core";
export declare class FeatureTourService {
    onChange: EventEmitter<Event>;
    initialize: EventEmitter<Setup>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<FeatureTourService, never>;
    static ɵprov: i0.ɵɵInjectableDef<FeatureTourService>;
}
