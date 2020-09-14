import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { NgFeatureTourComponent } from './components/feature-tour/ng-feature-tour.component';
import { AriaDescriptionPipe } from './pipes/aria-description.pipe';
import { AriaLabelPipe } from './pipes/aria-label.pipe';
import { IdentifyPipe } from './pipes/identify.pipe';
import * as i0 from "@angular/core";
export class NgFeatureTourModule {
}
NgFeatureTourModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgFeatureTourModule });
NgFeatureTourModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgFeatureTourModule_Factory(t) { return new (t || NgFeatureTourModule)(); }, imports: [[BrowserModule, A11yModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgFeatureTourModule, { declarations: [NgFeatureTourComponent,
        AriaDescriptionPipe,
        AriaLabelPipe,
        IdentifyPipe], imports: [BrowserModule, A11yModule], exports: [NgFeatureTourComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgFeatureTourModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgFeatureTourComponent,
                    AriaDescriptionPipe,
                    AriaLabelPipe,
                    IdentifyPipe,
                ],
                imports: [BrowserModule, A11yModule],
                exports: [NgFeatureTourComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmVhdHVyZS10b3VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWZlYXR1cmUtdG91ci9zcmMvbGliL25nLWZlYXR1cmUtdG91ci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRTdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBWXJELE1BQU0sT0FBTyxtQkFBbUI7O3VEQUFuQixtQkFBbUI7cUhBQW5CLG1CQUFtQixrQkFIckIsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO3dGQUd6QixtQkFBbUIsbUJBUjVCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLFlBQVksYUFFSixhQUFhLEVBQUUsVUFBVSxhQUN6QixzQkFBc0I7a0RBRXJCLG1CQUFtQjtjQVYvQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcblxuaW1wb3J0IHsgTmdGZWF0dXJlVG91ckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWF0dXJlLXRvdXIvbmctZmVhdHVyZS10b3VyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEFyaWFEZXNjcmlwdGlvblBpcGUgfSBmcm9tICcuL3BpcGVzL2FyaWEtZGVzY3JpcHRpb24ucGlwZSc7XG5pbXBvcnQgeyBBcmlhTGFiZWxQaXBlIH0gZnJvbSAnLi9waXBlcy9hcmlhLWxhYmVsLnBpcGUnO1xuaW1wb3J0IHsgSWRlbnRpZnlQaXBlIH0gZnJvbSAnLi9waXBlcy9pZGVudGlmeS5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdGZWF0dXJlVG91ckNvbXBvbmVudCxcbiAgICBBcmlhRGVzY3JpcHRpb25QaXBlLFxuICAgIEFyaWFMYWJlbFBpcGUsXG4gICAgSWRlbnRpZnlQaXBlLFxuICBdLFxuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgQTExeU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOZ0ZlYXR1cmVUb3VyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTmdGZWF0dXJlVG91ck1vZHVsZSB7fVxuIl19