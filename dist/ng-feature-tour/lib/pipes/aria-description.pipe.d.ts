import { PipeTransform } from '@angular/core';
import { Step } from '../ng-feature-tour.model';
import * as i0 from "@angular/core";
export declare class AriaDescriptionPipe implements PipeTransform {
    transform(step: Step): string;
    static ɵfac: i0.ɵɵFactoryDef<AriaDescriptionPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<AriaDescriptionPipe, "ariaDescription">;
}
