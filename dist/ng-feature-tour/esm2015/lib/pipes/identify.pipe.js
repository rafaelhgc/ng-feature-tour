import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class IdentifyPipe {
    transform(step, prefix = 'ft-step') {
        return `${prefix}-${step.target}`;
    }
}
IdentifyPipe.ɵfac = function IdentifyPipe_Factory(t) { return new (t || IdentifyPipe)(); };
IdentifyPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "identify", type: IdentifyPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IdentifyPipe, [{
        type: Pipe,
        args: [{ name: 'identify' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWZlYXR1cmUtdG91ci9zcmMvbGliL3BpcGVzL2lkZW50aWZ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSXBELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxJQUFVLEVBQUUsU0FBaUIsU0FBUztRQUM5QyxPQUFPLEdBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzt3RUFIVSxZQUFZOytEQUFaLFlBQVk7a0RBQVosWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcCB9IGZyb20gJy4uL25nLWZlYXR1cmUtdG91ci5tb2RlbCc7XG5cbkBQaXBlKHsgbmFtZTogJ2lkZW50aWZ5JyB9KVxuZXhwb3J0IGNsYXNzIElkZW50aWZ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oc3RlcDogU3RlcCwgcHJlZml4OiBzdHJpbmcgPSAnZnQtc3RlcCcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtwcmVmaXh9LSR7c3RlcC50YXJnZXR9YDtcbiAgfVxufVxuIl19