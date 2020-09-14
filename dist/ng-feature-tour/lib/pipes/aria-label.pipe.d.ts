import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AriaLabelPipe implements PipeTransform {
    transform(label: string, total: number, index: number): string;
    static ɵfac: i0.ɵɵFactoryDef<AriaLabelPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<AriaLabelPipe, "ariaLabel">;
}
