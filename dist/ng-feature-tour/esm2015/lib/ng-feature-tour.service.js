import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class FeatureTourService {
    constructor() {
        this.onChange = new EventEmitter();
        this.initialize = new EventEmitter();
    }
}
FeatureTourService.ɵfac = function FeatureTourService_Factory(t) { return new (t || FeatureTourService)(); };
FeatureTourService.ɵprov = i0.ɵɵdefineInjectable({ token: FeatureTourService, factory: FeatureTourService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeatureTourService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmVhdHVyZS10b3VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWF0dXJlLXRvdXIvc3JjL2xpYi9uZy1mZWF0dXJlLXRvdXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLekQsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFDOUMsQ0FBQzs7b0ZBUFUsa0JBQWtCOzBEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQURMLE1BQU07a0RBQ25CLGtCQUFrQjtjQUQ5QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50LCBTZXR1cCB9IGZyb20gJy4vbmctZmVhdHVyZS10b3VyLm1vZGVsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlVG91clNlcnZpY2Uge1xuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50PjtcbiAgaW5pdGlhbGl6ZTogRXZlbnRFbWl0dGVyPFNldHVwPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgICB0aGlzLmluaXRpYWxpemUgPSBuZXcgRXZlbnRFbWl0dGVyPFNldHVwPigpO1xuICB9XG59XG4iXX0=