import { Component, HostListener, Input } from '@angular/core';
import { EventEnum, } from '../../ng-feature-tour.model';
import * as i0 from "@angular/core";
import * as i1 from "../../ng-feature-tour.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/a11y";
import * as i4 from "../../pipes/identify.pipe";
import * as i5 from "../../pipes/aria-description.pipe";
import * as i6 from "../../pipes/aria-label.pipe";
function NgFeatureTourComponent_div_0_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const step_r9 = ctx.$implicit;
    i0.ɵɵclassProp("is-current", step_r9.enabled);
} }
function NgFeatureTourComponent_div_0_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const step_r2 = i0.ɵɵnextContext().$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.abort(step_r2); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r5.setup.controls.abort, i0.ɵɵsanitizeHtml);
} }
function NgFeatureTourComponent_div_0_div_1_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); const step_r2 = ctx_r14.$implicit; const index_r3 = ctx_r14.index; const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.previous(step_r2, index_r3); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r6.setup.controls.previous, i0.ɵɵsanitizeHtml);
} }
function NgFeatureTourComponent_div_0_div_1_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); const step_r2 = ctx_r17.$implicit; const index_r3 = ctx_r17.index; const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.next(step_r2, index_r3); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r7.setup.controls.next, i0.ɵɵsanitizeHtml);
} }
function NgFeatureTourComponent_div_0_div_1_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const step_r2 = i0.ɵɵnextContext().$implicit; const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.finish(step_r2); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r8.setup.controls.done, i0.ɵɵsanitizeHtml);
} }
function NgFeatureTourComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onEscapeHandler(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵpipe(4, "identify");
    i0.ɵɵpipe(5, "ariaDescription");
    i0.ɵɵpipe(6, "ariaLabel");
    i0.ɵɵelementStart(7, "h2", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 9);
    i0.ɵɵtemplate(12, NgFeatureTourComponent_div_0_div_1_span_12_Template, 1, 2, "span", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 11);
    i0.ɵɵelementStart(14, "div", 12);
    i0.ɵɵtemplate(15, NgFeatureTourComponent_div_0_div_1_button_15_Template, 1, 1, "button", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 14);
    i0.ɵɵtemplate(17, NgFeatureTourComponent_div_0_div_1_button_17_Template, 1, 1, "button", 13);
    i0.ɵɵtemplate(18, NgFeatureTourComponent_div_0_div_1_button_18_Template, 1, 1, "button", 13);
    i0.ɵɵtemplate(19, NgFeatureTourComponent_div_0_div_1_button_19_Template, 1, 1, "button", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", !step_r2.enabled);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("left", step_r2.bounds == null ? null : step_r2.bounds.lens.left, "px")("top", step_r2.bounds == null ? null : step_r2.bounds.lens.top, "px")("width", step_r2.bounds == null ? null : step_r2.bounds.lens.width, "px")("height", step_r2.bounds == null ? null : step_r2.bounds.lens.height, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ft-step ", step_r2.bounds == null ? null : step_r2.bounds.modifiers, "");
    i0.ɵɵstyleProp("left", step_r2.bounds == null ? null : step_r2.bounds.left, "px")("top", step_r2.bounds == null ? null : step_r2.bounds.top, "px")("visibility", step_r2.visible ? "visible" : "hidden");
    i0.ɵɵproperty("id", i0.ɵɵpipeBind1(4, 28, step_r2));
    i0.ɵɵattribute("aria-roledescription", i0.ɵɵpipeBind1(5, 30, step_r2))("aria-label", i0.ɵɵpipeBind3(6, 32, ctx_r1.setup.a11ty.roleDescription, ctx_r1.steps.length, index_r3));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(step_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r2.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.steps);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.isLastStep(index_r3));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isFirstStep(index_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.isLastStep(index_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isLastStep(index_r3));
} }
function NgFeatureTourComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, NgFeatureTourComponent_div_0_div_1_Template, 20, 36, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.steps);
} }
export class NgFeatureTourComponent {
    constructor(featureTourService) {
        this.featureTourService = featureTourService;
    }
    disableStep(step) {
        step.enabled = false;
        step.visible = false;
    }
    disableTour(step, event) {
        this.enabled = false;
        this.emitChangeEvent(step, event);
    }
    scrollToTop(step) {
        window.scrollTo(0, document.getElementById(step.target).offsetTop - 16);
    }
    emitChangeEvent(step, event) {
        this.featureTourService.onChange.emit({ event, step });
    }
    getBounds(step, target) {
        const margin = 32;
        const stepRect = step.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        let left;
        let top;
        let modifiers = [];
        // axis y
        if (targetRect.y >
            screen.availHeight - (targetRect.y + targetRect.height)) {
            modifiers.push('to-top');
            top = targetRect.y - stepRect.height - margin;
        }
        else {
            modifiers.push('to-bottom');
            top = targetRect.y + targetRect.height + margin;
        }
        // axis x
        if (targetRect.x > screen.availWidth / 2) {
            modifiers.push('to-right');
            left = targetRect.x + targetRect.width - stepRect.width;
        }
        else {
            modifiers.push('to-left');
            left = targetRect.x;
        }
        return {
            left,
            top,
            modifiers: modifiers.join(' '),
            lens: {
                left: targetRect.left,
                top: targetRect.top,
                width: targetRect.width,
                height: targetRect.height,
            },
        };
    }
    applyBounds(step) {
        const stepId = `ft-step-${step.target}`;
        const targetElement = document.getElementById(step.target);
        const stepElement = document.getElementById(stepId);
        step.bounds = this.getBounds(stepElement, targetElement);
    }
    captureFocus(step) {
        const stepId = `ft-step-${step.target}`;
        const tabable = document.querySelectorAll(`#${stepId} [tabindex]`).item(0);
        setTimeout(() => {
            tabable.focus();
        }, 1);
    }
    enableStep(step) {
        this.scrollToTop(step);
        this.enabled = true;
        step.enabled = true;
        // render delay trick
        setTimeout(() => {
            step.visible = true;
            this.applyBounds(step);
            this.captureFocus(step);
        }, 1);
    }
    ngOnInit() {
        if (!this.steps || this.steps.length === 0) {
            throw 'NgFeatureTourComponent: no steps provided';
        }
        this.featureTourService.initialize.subscribe((setup) => {
            const initialStep = this.steps
                .filter((step) => step.target === setup.initialStep)
                .shift();
            if (!initialStep) {
                throw `NgFeatureTourComponent: target "${setup.initialStep}" not found`;
            }
            this.setup = setup;
            this.enableStep(initialStep);
        });
    }
    onEscapeHandler(event) {
        if (!this.steps) {
            return;
        }
        const currentStep = this.steps.filter(({ enabled }) => enabled).shift();
        if (!currentStep) {
            return;
        }
        this.close(currentStep);
        this.emitChangeEvent(currentStep, EventEnum.Escape);
    }
    close(step) {
        step.enabled = false;
        step.visible = false;
        this.enabled = false;
    }
    isLastStep(stepIndex) {
        return stepIndex === this.steps.length - 1;
    }
    isFirstStep(stepIndex) {
        return stepIndex === 0;
    }
    getAriasIdentifiers(target) {
        return `ft-title-${target} ft-description-${target}`;
    }
    previous(currentStep, currentStepIndex) {
        const step = this.steps[currentStepIndex - 1];
        this.disableStep(currentStep);
        this.enableStep(step);
        this.emitChangeEvent(step, EventEnum.Previous);
    }
    next(currentStep, currentStepIndex) {
        const step = this.steps[currentStepIndex + 1];
        this.disableStep(currentStep);
        this.enableStep(step);
        this.emitChangeEvent(step, EventEnum.Next);
    }
    finish(currentStep) {
        this.disableStep(currentStep);
        this.disableTour(currentStep, EventEnum.Finish);
    }
    abort(currentStep) {
        this.disableStep(currentStep);
        this.disableTour(currentStep, EventEnum.Abort);
    }
}
NgFeatureTourComponent.ɵfac = function NgFeatureTourComponent_Factory(t) { return new (t || NgFeatureTourComponent)(i0.ɵɵdirectiveInject(i1.FeatureTourService)); };
NgFeatureTourComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgFeatureTourComponent, selectors: [["ng-feature-tour"]], hostBindings: function NgFeatureTourComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown.escape", function NgFeatureTourComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeHandler($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { steps: "steps" }, decls: 1, vars: 1, consts: [["class", "ft-wrapper", "cdkTrapFocus", "", 4, "ngIf"], ["cdkTrapFocus", "", 1, "ft-wrapper"], [3, "hidden", 4, "ngFor", "ngForOf"], [3, "hidden"], [1, "ft-scape-handler", 3, "click"], [1, "ft-lens"], ["aria-modal", "true", "role", "dialog", 3, "id"], [1, "ft-step-title"], [1, "ft-step-description"], [1, "ft-step-bullet-list"], ["class", "ft-step-bullet", 3, "is-current", 4, "ngFor", "ngForOf"], [1, "ft-step-controls"], [1, "ft-step-abort"], ["type", "button", "tabindex", "0", 3, "innerHTML", "click", 4, "ngIf"], [1, "ft-step-navigation"], [1, "ft-step-bullet"], ["type", "button", "tabindex", "0", 3, "innerHTML", "click"]], template: function NgFeatureTourComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgFeatureTourComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.enabled);
    } }, directives: [i2.NgIf, i3.CdkTrapFocus, i2.NgForOf], pipes: [i4.IdentifyPipe, i5.AriaDescriptionPipe, i6.AriaLabelPipe], styles: [".ft-scape-handler[_ngcontent-%COMP%]{background-color:initial;height:100vh;left:0;position:fixed;top:0;width:100%;z-index:9900}.ft-step[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;color:#444;max-width:320px;min-width:320px;padding:16px;position:fixed;transition:left .3s linear,top .3s linear,width .3s linear;z-index:9999}.ft-step[_ngcontent-%COMP%]:before{border-color:#fff transparent;border-style:solid;border-width:16px;content:\"\";height:0;position:absolute;width:0}.ft-step.to-top[_ngcontent-%COMP%]:before{border-bottom-color:transparent;bottom:-31px}.ft-step.to-bottom[_ngcontent-%COMP%]:before{border-top-color:transparent;top:-31px}.ft-step.to-left[_ngcontent-%COMP%]:before{left:16px}.ft-step.to-right[_ngcontent-%COMP%]:before{right:16px}.ft-step-bullet.is-current[_ngcontent-%COMP%]{background-color:#2980b9}.ft-step-title[_ngcontent-%COMP%]{font-size:18px;margin:0 0 16px}.ft-step-description[_ngcontent-%COMP%]{font-size:16px;line-height:1.4;margin:0 0 16px}.ft-step-bullet-list[_ngcontent-%COMP%]{align-items:center;display:flex;margin:0 0 16px}.ft-step-bullet[_ngcontent-%COMP%]{background-color:#bdc3c7;border-radius:50%;display:block;height:10px;margin-right:10px;width:10px}.ft-lens[_ngcontent-%COMP%]{box-shadow:0 0 0 1000em rgba(0,0,0,.75);position:fixed;transition:left .3s linear,top .3s linear,width .3s linear,height .3s linear;z-index:9990}.ft-step-controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.ft-step-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:#fff;border:2px solid #2980b9;border-radius:4px;color:#2980b9;font-size:14px;font-weight:700;padding:8px 12px}.ft-step-navigation[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.ft-step-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#2980b9;color:#fff;margin-left:16px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgFeatureTourComponent, [{
        type: Component,
        args: [{
                selector: 'ng-feature-tour',
                templateUrl: './ng-feature-tour.component.html',
                styleUrls: ['./ng-feature-tour.component.scss'],
            }]
    }], function () { return [{ type: i1.FeatureTourService }]; }, { steps: [{
            type: Input
        }], onEscapeHandler: [{
            type: HostListener,
            args: ['document:keydown.escape', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmVhdHVyZS10b3VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWZlYXR1cmUtdG91ci9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZS10b3VyL25nLWZlYXR1cmUtdG91ci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWF0dXJlLXRvdXIvc3JjL2xpYi9jb21wb25lbnRzL2ZlYXR1cmUtdG91ci9uZy1mZWF0dXJlLXRvdXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFFTCxTQUFTLEdBR1YsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7O0lDb0I3QiwyQkFJUTs7O0lBRE4sNkNBQWlDOzs7O0lBS2pDLGtDQU1VO0lBRlIsOFBBQXFCO0lBRXRCLGlCQUFTOzs7SUFEUiwwRUFBa0M7Ozs7SUFJcEMsa0NBTVU7SUFGUixvVUFBK0I7SUFFaEMsaUJBQVM7OztJQURSLDZFQUFxQzs7OztJQUV2QyxrQ0FNVTtJQUZSLGdVQUEyQjtJQUU1QixpQkFBUzs7O0lBRFIseUVBQWlDOzs7O0lBRW5DLGtDQU1VO0lBRlIsK1BBQXNCO0lBRXZCLGlCQUFTOzs7SUFEUix5RUFBaUM7Ozs7SUE5RDNDLDhCQUNFO0lBQUEsOEJBQWdFO0lBQWxDLHNNQUEyQjtJQUFDLGlCQUFNO0lBQ2hFLHlCQU1PO0lBQ1AsOEJBYUU7Ozs7SUFBQSw2QkFBMEI7SUFBQSxZQUFnQjtJQUFBLGlCQUFLO0lBQy9DLDhCQUFpQztJQUFBLGFBQXNCO0lBQUEsaUJBQU07SUFFN0QsK0JBQ0U7SUFBQSx3RkFJQztJQUNILGlCQUFNO0lBQ04sZ0NBQ0U7SUFBQSxnQ0FDRTtJQUFBLDRGQU1DO0lBQ0gsaUJBQU07SUFDTixnQ0FD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QkFBd0I7UUFDOUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBaUI7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFpQjtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs0RkFsTFUsc0JBQXNCOzJEQUF0QixzQkFBc0I7MkhBQXRCLDJCQUF1Qjs7UUNmcEMsdUVBQ0U7O1FBRHNCLGtDQUFlOztrRERlMUIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDtxRUFHQyxLQUFLO2tCQURKLEtBQUs7WUF3SE4sZUFBZTtrQkFEZCxZQUFZO21CQUFDLHlCQUF5QixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgU3RlcCxcbiAgRXZlbnRFbnVtLFxuICBTdGVwQm91bmRzLFxuICBTZXR1cCxcbn0gZnJvbSAnLi4vLi4vbmctZmVhdHVyZS10b3VyLm1vZGVsJztcbmltcG9ydCB7IEZlYXR1cmVUb3VyU2VydmljZSB9IGZyb20gJy4uLy4uL25nLWZlYXR1cmUtdG91ci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZmVhdHVyZS10b3VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nLWZlYXR1cmUtdG91ci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLWZlYXR1cmUtdG91ci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZ0ZlYXR1cmVUb3VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc3RlcHM6IFN0ZXBbXTtcblxuICBlbmFibGVkOiBib29sZWFuO1xuXG4gIHNldHVwOiBTZXR1cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZlYXR1cmVUb3VyU2VydmljZTogRmVhdHVyZVRvdXJTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgZGlzYWJsZVN0ZXAoc3RlcDogU3RlcCk6IHZvaWQge1xuICAgIHN0ZXAuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHN0ZXAudmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlVG91cihzdGVwOiBTdGVwLCBldmVudDogRXZlbnRFbnVtKTogdm9pZCB7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0Q2hhbmdlRXZlbnQoc3RlcCwgZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb1RvcChzdGVwOiBTdGVwKTogdm9pZCB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0ZXAudGFyZ2V0KS5vZmZzZXRUb3AgLSAxNik7XG4gIH1cblxuICBwcml2YXRlIGVtaXRDaGFuZ2VFdmVudChzdGVwOiBTdGVwLCBldmVudDogRXZlbnRFbnVtKTogdm9pZCB7XG4gICAgdGhpcy5mZWF0dXJlVG91clNlcnZpY2Uub25DaGFuZ2UuZW1pdCh7IGV2ZW50LCBzdGVwIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCb3VuZHMoc3RlcDogSFRNTEVsZW1lbnQsIHRhcmdldDogSFRNTEVsZW1lbnQpOiBTdGVwQm91bmRzIHtcbiAgICBjb25zdCBtYXJnaW4gPSAzMjtcbiAgICBjb25zdCBzdGVwUmVjdCA9IHN0ZXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGxldCBsZWZ0OiBudW1iZXI7XG4gICAgbGV0IHRvcDogbnVtYmVyO1xuICAgIGxldCBtb2RpZmllcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICAvLyBheGlzIHlcbiAgICBpZiAoXG4gICAgICB0YXJnZXRSZWN0LnkgPlxuICAgICAgc2NyZWVuLmF2YWlsSGVpZ2h0IC0gKHRhcmdldFJlY3QueSArIHRhcmdldFJlY3QuaGVpZ2h0KVxuICAgICkge1xuICAgICAgbW9kaWZpZXJzLnB1c2goJ3RvLXRvcCcpO1xuICAgICAgdG9wID0gdGFyZ2V0UmVjdC55IC0gc3RlcFJlY3QuaGVpZ2h0IC0gbWFyZ2luO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2RpZmllcnMucHVzaCgndG8tYm90dG9tJyk7XG4gICAgICB0b3AgPSB0YXJnZXRSZWN0LnkgKyB0YXJnZXRSZWN0LmhlaWdodCArIG1hcmdpbjtcbiAgICB9XG5cbiAgICAvLyBheGlzIHhcbiAgICBpZiAodGFyZ2V0UmVjdC54ID4gc2NyZWVuLmF2YWlsV2lkdGggLyAyKSB7XG4gICAgICBtb2RpZmllcnMucHVzaCgndG8tcmlnaHQnKTtcbiAgICAgIGxlZnQgPSB0YXJnZXRSZWN0LnggKyB0YXJnZXRSZWN0LndpZHRoIC0gc3RlcFJlY3Qud2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZGlmaWVycy5wdXNoKCd0by1sZWZ0Jyk7XG4gICAgICBsZWZ0ID0gdGFyZ2V0UmVjdC54O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsZWZ0LFxuICAgICAgdG9wLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMuam9pbignICcpLFxuICAgICAgbGVuczoge1xuICAgICAgICBsZWZ0OiB0YXJnZXRSZWN0LmxlZnQsXG4gICAgICAgIHRvcDogdGFyZ2V0UmVjdC50b3AsXG4gICAgICAgIHdpZHRoOiB0YXJnZXRSZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRhcmdldFJlY3QuaGVpZ2h0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseUJvdW5kcyhzdGVwOiBTdGVwKTogdm9pZCB7XG4gICAgY29uc3Qgc3RlcElkID0gYGZ0LXN0ZXAtJHtzdGVwLnRhcmdldH1gO1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdGVwLnRhcmdldCk7XG4gICAgY29uc3Qgc3RlcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdGVwSWQpO1xuXG4gICAgc3RlcC5ib3VuZHMgPSB0aGlzLmdldEJvdW5kcyhzdGVwRWxlbWVudCwgdGFyZ2V0RWxlbWVudCk7XG4gIH1cblxuICBwcml2YXRlIGNhcHR1cmVGb2N1cyhzdGVwOiBTdGVwKTogdm9pZCB7XG4gICAgY29uc3Qgc3RlcElkID0gYGZ0LXN0ZXAtJHtzdGVwLnRhcmdldH1gO1xuICAgIGNvbnN0IHRhYmFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtzdGVwSWR9IFt0YWJpbmRleF1gKS5pdGVtKDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAoPEhUTUxFbGVtZW50PnRhYmFibGUpLmZvY3VzKCk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZVN0ZXAoc3RlcDogU3RlcCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsVG9Ub3Aoc3RlcCk7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICBzdGVwLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgLy8gcmVuZGVyIGRlbGF5IHRyaWNrXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzdGVwLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5hcHBseUJvdW5kcyhzdGVwKTtcbiAgICAgIHRoaXMuY2FwdHVyZUZvY3VzKHN0ZXApO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN0ZXBzIHx8IHRoaXMuc3RlcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyAnTmdGZWF0dXJlVG91ckNvbXBvbmVudDogbm8gc3RlcHMgcHJvdmlkZWQnO1xuICAgIH1cblxuICAgIHRoaXMuZmVhdHVyZVRvdXJTZXJ2aWNlLmluaXRpYWxpemUuc3Vic2NyaWJlKChzZXR1cDogU2V0dXApID0+IHtcbiAgICAgIGNvbnN0IGluaXRpYWxTdGVwID0gdGhpcy5zdGVwc1xuICAgICAgICAuZmlsdGVyKChzdGVwKSA9PiBzdGVwLnRhcmdldCA9PT0gc2V0dXAuaW5pdGlhbFN0ZXApXG4gICAgICAgIC5zaGlmdCgpO1xuXG4gICAgICBpZiAoIWluaXRpYWxTdGVwKSB7XG4gICAgICAgIHRocm93IGBOZ0ZlYXR1cmVUb3VyQ29tcG9uZW50OiB0YXJnZXQgXCIke3NldHVwLmluaXRpYWxTdGVwfVwiIG5vdCBmb3VuZGA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0dXAgPSBzZXR1cDtcbiAgICAgIHRoaXMuZW5hYmxlU3RlcChpbml0aWFsU3RlcCk7XG4gICAgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gIG9uRXNjYXBlSGFuZGxlcihldmVudD86IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc3RlcHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IHRoaXMuc3RlcHMuZmlsdGVyKCh7IGVuYWJsZWQgfSkgPT4gZW5hYmxlZCkuc2hpZnQoKTtcblxuICAgIGlmICghY3VycmVudFN0ZXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKGN1cnJlbnRTdGVwKTtcbiAgICB0aGlzLmVtaXRDaGFuZ2VFdmVudChjdXJyZW50U3RlcCwgRXZlbnRFbnVtLkVzY2FwZSk7XG4gIH1cblxuICBjbG9zZShzdGVwOiBTdGVwKTogdm9pZCB7XG4gICAgc3RlcC5lbmFibGVkID0gZmFsc2U7XG4gICAgc3RlcC52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBpc0xhc3RTdGVwKHN0ZXBJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHN0ZXBJbmRleCA9PT0gdGhpcy5zdGVwcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgaXNGaXJzdFN0ZXAoc3RlcEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc3RlcEluZGV4ID09PSAwO1xuICB9XG5cbiAgZ2V0QXJpYXNJZGVudGlmaWVycyh0YXJnZXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBmdC10aXRsZS0ke3RhcmdldH0gZnQtZGVzY3JpcHRpb24tJHt0YXJnZXR9YDtcbiAgfVxuXG4gIHByZXZpb3VzKGN1cnJlbnRTdGVwOiBTdGVwLCBjdXJyZW50U3RlcEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwc1tjdXJyZW50U3RlcEluZGV4IC0gMV07XG5cbiAgICB0aGlzLmRpc2FibGVTdGVwKGN1cnJlbnRTdGVwKTtcbiAgICB0aGlzLmVuYWJsZVN0ZXAoc3RlcCk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlRXZlbnQoc3RlcCwgRXZlbnRFbnVtLlByZXZpb3VzKTtcbiAgfVxuXG4gIG5leHQoY3VycmVudFN0ZXA6IFN0ZXAsIGN1cnJlbnRTdGVwSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzW2N1cnJlbnRTdGVwSW5kZXggKyAxXTtcblxuICAgIHRoaXMuZGlzYWJsZVN0ZXAoY3VycmVudFN0ZXApO1xuICAgIHRoaXMuZW5hYmxlU3RlcChzdGVwKTtcbiAgICB0aGlzLmVtaXRDaGFuZ2VFdmVudChzdGVwLCBFdmVudEVudW0uTmV4dCk7XG4gIH1cblxuICBmaW5pc2goY3VycmVudFN0ZXA6IFN0ZXApOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVTdGVwKGN1cnJlbnRTdGVwKTtcbiAgICB0aGlzLmRpc2FibGVUb3VyKGN1cnJlbnRTdGVwLCBFdmVudEVudW0uRmluaXNoKTtcbiAgfVxuXG4gIGFib3J0KGN1cnJlbnRTdGVwOiBTdGVwKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlU3RlcChjdXJyZW50U3RlcCk7XG4gICAgdGhpcy5kaXNhYmxlVG91cihjdXJyZW50U3RlcCwgRXZlbnRFbnVtLkFib3J0KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZ0LXdyYXBwZXJcIiAqbmdJZj1cImVuYWJsZWRcIiBjZGtUcmFwRm9jdXM+XG4gIDxkaXYgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpbmRleCA9IGluZGV4XCIgW2hpZGRlbl09XCIhc3RlcC5lbmFibGVkXCI+XG4gICAgPGRpdiBjbGFzcz1cImZ0LXNjYXBlLWhhbmRsZXJcIiAoY2xpY2spPVwib25Fc2NhcGVIYW5kbGVyKClcIj48L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZ0LWxlbnNcIlxuICAgICAgW3N0eWxlLmxlZnQucHhdPVwic3RlcC5ib3VuZHM/LmxlbnMubGVmdFwiXG4gICAgICBbc3R5bGUudG9wLnB4XT1cInN0ZXAuYm91bmRzPy5sZW5zLnRvcFwiXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwic3RlcC5ib3VuZHM/LmxlbnMud2lkdGhcIlxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzdGVwLmJvdW5kcz8ubGVucy5oZWlnaHRcIlxuICAgID48L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgIGNsYXNzPVwiZnQtc3RlcCB7eyBzdGVwLmJvdW5kcz8ubW9kaWZpZXJzIH19XCJcbiAgICAgIFtpZF09XCJzdGVwIHwgaWRlbnRpZnlcIlxuICAgICAgW2F0dHIuYXJpYS1yb2xlZGVzY3JpcHRpb25dPVwic3RlcCB8IGFyaWFEZXNjcmlwdGlvblwiXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICBzZXR1cC5hMTF0eS5yb2xlRGVzY3JpcHRpb24gfCBhcmlhTGFiZWw6IHN0ZXBzLmxlbmd0aDppbmRleFxuICAgICAgXCJcbiAgICAgIFtzdHlsZS5sZWZ0LnB4XT1cInN0ZXAuYm91bmRzPy5sZWZ0XCJcbiAgICAgIFtzdHlsZS50b3AucHhdPVwic3RlcC5ib3VuZHM/LnRvcFwiXG4gICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzdGVwLnZpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXG4gICAgPlxuICAgICAgPGgyIGNsYXNzPVwiZnQtc3RlcC10aXRsZVwiPnt7IHN0ZXAudGl0bGUgfX08L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImZ0LXN0ZXAtZGVzY3JpcHRpb25cIj57eyBzdGVwLmRlc2NyaXB0aW9uIH19PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmdC1zdGVwLWJ1bGxldC1saXN0XCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHNcIlxuICAgICAgICAgIGNsYXNzPVwiZnQtc3RlcC1idWxsZXRcIlxuICAgICAgICAgIFtjbGFzcy5pcy1jdXJyZW50XT1cInN0ZXAuZW5hYmxlZFwiXG4gICAgICAgID48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmdC1zdGVwLWNvbnRyb2xzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdC1zdGVwLWFib3J0XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgKm5nSWY9XCIhaXNMYXN0U3RlcChpbmRleClcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImFib3J0KHN0ZXApXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic2V0dXAuY29udHJvbHMuYWJvcnRcIlxuICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdC1zdGVwLW5hdmlnYXRpb25cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAqbmdJZj1cIiFpc0ZpcnN0U3RlcChpbmRleClcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzKHN0ZXAsIGluZGV4KVwiXG4gICAgICAgICAgICBbaW5uZXJIVE1MXT1cInNldHVwLmNvbnRyb2xzLnByZXZpb3VzXCJcbiAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgKm5nSWY9XCIhaXNMYXN0U3RlcChpbmRleClcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm5leHQoc3RlcCwgaW5kZXgpXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic2V0dXAuY29udHJvbHMubmV4dFwiXG4gICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaXNMYXN0U3RlcChpbmRleClcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImZpbmlzaChzdGVwKVwiXG4gICAgICAgICAgICBbaW5uZXJIVE1MXT1cInNldHVwLmNvbnRyb2xzLmRvbmVcIlxuICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==