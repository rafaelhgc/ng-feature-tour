import { PipeTransform } from '@angular/core';
import { Step } from '../ng-feature-tour.model';
import * as i0 from "@angular/core";
export declare class IdentifyPipe implements PipeTransform {
    transform(step: Step, prefix?: string): string;
    static ɵfac: i0.ɵɵFactoryDef<IdentifyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<IdentifyPipe, "identify">;
}
