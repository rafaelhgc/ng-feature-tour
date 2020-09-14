import { EventEmitter, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefinePipe, Pipe, ɵɵelement, ɵɵclassProp, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵproperty, ɵɵsanitizeHtml, ɵɵpipe, ɵɵtext, ɵɵtemplate, ɵɵadvance, ɵɵstyleProp, ɵɵclassMapInterpolate1, ɵɵpipeBind1, ɵɵattribute, ɵɵpipeBind3, ɵɵtextInterpolate, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵresolveDocument, Component, Input, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { CdkTrapFocus, A11yModule } from '@angular/cdk/a11y';
import { BrowserModule } from '@angular/platform-browser';

var EventEnum;
(function (EventEnum) {
    EventEnum["Start"] = "START";
    EventEnum["Next"] = "NEXT";
    EventEnum["Previous"] = "PREVIOUS";
    EventEnum["Abort"] = "ABORT";
    EventEnum["Finish"] = "FINISH";
    EventEnum["Escape"] = "ESCAPE";
})(EventEnum || (EventEnum = {}));

class FeatureTourService {
    constructor() {
        this.onChange = new EventEmitter();
        this.initialize = new EventEmitter();
    }
}
FeatureTourService.ɵfac = function FeatureTourService_Factory(t) { return new (t || FeatureTourService)(); };
FeatureTourService.ɵprov = ɵɵdefineInjectable({ token: FeatureTourService, factory: FeatureTourService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FeatureTourService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

class IdentifyPipe {
    transform(step, prefix = 'ft-step') {
        return `${prefix}-${step.target}`;
    }
}
IdentifyPipe.ɵfac = function IdentifyPipe_Factory(t) { return new (t || IdentifyPipe)(); };
IdentifyPipe.ɵpipe = ɵɵdefinePipe({ name: "identify", type: IdentifyPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IdentifyPipe, [{
        type: Pipe,
        args: [{ name: 'identify' }]
    }], null, null); })();

class AriaDescriptionPipe {
    transform(step) {
        return `${step.title}. ${step.description}.`;
    }
}
AriaDescriptionPipe.ɵfac = function AriaDescriptionPipe_Factory(t) { return new (t || AriaDescriptionPipe)(); };
AriaDescriptionPipe.ɵpipe = ɵɵdefinePipe({ name: "ariaDescription", type: AriaDescriptionPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AriaDescriptionPipe, [{
        type: Pipe,
        args: [{ name: 'ariaDescription' }]
    }], null, null); })();

class AriaLabelPipe {
    transform(label, total, index) {
        index = index + 1;
        return label
            .replace('{total}', total.toString())
            .replace('{index}', index.toString());
    }
}
AriaLabelPipe.ɵfac = function AriaLabelPipe_Factory(t) { return new (t || AriaLabelPipe)(); };
AriaLabelPipe.ɵpipe = ɵɵdefinePipe({ name: "ariaLabel", type: AriaLabelPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AriaLabelPipe, [{
        type: Pipe,
        args: [{ name: 'ariaLabel' }]
    }], null, null); })();

function NgFeatureTourComponent_div_0_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const step_r9 = ctx.$implicit;
    ɵɵclassProp("is-current", step_r9.enabled);
} }
function NgFeatureTourComponent_div_0_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_15_Template_button_click_0_listener() { ɵɵrestoreView(_r12); const step_r2 = ɵɵnextContext().$implicit; const ctx_r10 = ɵɵnextContext(2); return ctx_r10.abort(step_r2); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("innerHTML", ctx_r5.setup.controls.abort, ɵɵsanitizeHtml);
} }
function NgFeatureTourComponent_div_0_div_1_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_17_Template_button_click_0_listener() { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(); const step_r2 = ctx_r14.$implicit; const index_r3 = ctx_r14.index; const ctx_r13 = ɵɵnextContext(2); return ctx_r13.previous(step_r2, index_r3); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵproperty("innerHTML", ctx_r6.setup.controls.previous, ɵɵsanitizeHtml);
} }
function NgFeatureTourComponent_div_0_div_1_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_18_Template_button_click_0_listener() { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(); const step_r2 = ctx_r17.$implicit; const index_r3 = ctx_r17.index; const ctx_r16 = ɵɵnextContext(2); return ctx_r16.next(step_r2, index_r3); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵproperty("innerHTML", ctx_r7.setup.controls.next, ɵɵsanitizeHtml);
} }
function NgFeatureTourComponent_div_0_div_1_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_19_Template_button_click_0_listener() { ɵɵrestoreView(_r21); const step_r2 = ɵɵnextContext().$implicit; const ctx_r19 = ɵɵnextContext(2); return ctx_r19.finish(step_r2); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵproperty("innerHTML", ctx_r8.setup.controls.done, ɵɵsanitizeHtml);
} }
function NgFeatureTourComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "div", 4);
    ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_Template_div_click_1_listener() { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(2); return ctx_r22.onEscapeHandler(); });
    ɵɵelementEnd();
    ɵɵelement(2, "div", 5);
    ɵɵelementStart(3, "div", 6);
    ɵɵpipe(4, "identify");
    ɵɵpipe(5, "ariaDescription");
    ɵɵpipe(6, "ariaLabel");
    ɵɵelementStart(7, "h2", 7);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 8);
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 9);
    ɵɵtemplate(12, NgFeatureTourComponent_div_0_div_1_span_12_Template, 1, 2, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 11);
    ɵɵelementStart(14, "div", 12);
    ɵɵtemplate(15, NgFeatureTourComponent_div_0_div_1_button_15_Template, 1, 1, "button", 13);
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 14);
    ɵɵtemplate(17, NgFeatureTourComponent_div_0_div_1_button_17_Template, 1, 1, "button", 13);
    ɵɵtemplate(18, NgFeatureTourComponent_div_0_div_1_button_18_Template, 1, 1, "button", 13);
    ɵɵtemplate(19, NgFeatureTourComponent_div_0_div_1_button_19_Template, 1, 1, "button", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("hidden", !step_r2.enabled);
    ɵɵadvance(2);
    ɵɵstyleProp("left", step_r2.bounds == null ? null : step_r2.bounds.lens.left, "px")("top", step_r2.bounds == null ? null : step_r2.bounds.lens.top, "px")("width", step_r2.bounds == null ? null : step_r2.bounds.lens.width, "px")("height", step_r2.bounds == null ? null : step_r2.bounds.lens.height, "px");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("ft-step ", step_r2.bounds == null ? null : step_r2.bounds.modifiers, "");
    ɵɵstyleProp("left", step_r2.bounds == null ? null : step_r2.bounds.left, "px")("top", step_r2.bounds == null ? null : step_r2.bounds.top, "px")("visibility", step_r2.visible ? "visible" : "hidden");
    ɵɵproperty("id", ɵɵpipeBind1(4, 28, step_r2));
    ɵɵattribute("aria-roledescription", ɵɵpipeBind1(5, 30, step_r2))("aria-label", ɵɵpipeBind3(6, 32, ctx_r1.setup.a11ty.roleDescription, ctx_r1.steps.length, index_r3));
    ɵɵadvance(5);
    ɵɵtextInterpolate(step_r2.title);
    ɵɵadvance(2);
    ɵɵtextInterpolate(step_r2.description);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.steps);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r1.isLastStep(index_r3));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.isFirstStep(index_r3));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.isLastStep(index_r3));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isLastStep(index_r3));
} }
function NgFeatureTourComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NgFeatureTourComponent_div_0_div_1_Template, 20, 36, "div", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.steps);
} }
class NgFeatureTourComponent {
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
NgFeatureTourComponent.ɵfac = function NgFeatureTourComponent_Factory(t) { return new (t || NgFeatureTourComponent)(ɵɵdirectiveInject(FeatureTourService)); };
NgFeatureTourComponent.ɵcmp = ɵɵdefineComponent({ type: NgFeatureTourComponent, selectors: [["ng-feature-tour"]], hostBindings: function NgFeatureTourComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown.escape", function NgFeatureTourComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeHandler($event); }, false, ɵɵresolveDocument);
    } }, inputs: { steps: "steps" }, decls: 1, vars: 1, consts: [["class", "ft-wrapper", "cdkTrapFocus", "", 4, "ngIf"], ["cdkTrapFocus", "", 1, "ft-wrapper"], [3, "hidden", 4, "ngFor", "ngForOf"], [3, "hidden"], [1, "ft-scape-handler", 3, "click"], [1, "ft-lens"], ["aria-modal", "true", "role", "dialog", 3, "id"], [1, "ft-step-title"], [1, "ft-step-description"], [1, "ft-step-bullet-list"], ["class", "ft-step-bullet", 3, "is-current", 4, "ngFor", "ngForOf"], [1, "ft-step-controls"], [1, "ft-step-abort"], ["type", "button", "tabindex", "0", 3, "innerHTML", "click", 4, "ngIf"], [1, "ft-step-navigation"], [1, "ft-step-bullet"], ["type", "button", "tabindex", "0", 3, "innerHTML", "click"]], template: function NgFeatureTourComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NgFeatureTourComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.enabled);
    } }, directives: [NgIf, CdkTrapFocus, NgForOf], pipes: [IdentifyPipe, AriaDescriptionPipe, AriaLabelPipe], styles: [".ft-scape-handler[_ngcontent-%COMP%]{background-color:initial;height:100vh;left:0;position:fixed;top:0;width:100%;z-index:9900}.ft-step[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;color:#444;max-width:320px;min-width:320px;padding:16px;position:fixed;transition:left .3s linear,top .3s linear,width .3s linear;z-index:9999}.ft-step[_ngcontent-%COMP%]:before{border-color:#fff transparent;border-style:solid;border-width:16px;content:\"\";height:0;position:absolute;width:0}.ft-step.to-top[_ngcontent-%COMP%]:before{border-bottom-color:transparent;bottom:-31px}.ft-step.to-bottom[_ngcontent-%COMP%]:before{border-top-color:transparent;top:-31px}.ft-step.to-left[_ngcontent-%COMP%]:before{left:16px}.ft-step.to-right[_ngcontent-%COMP%]:before{right:16px}.ft-step-bullet.is-current[_ngcontent-%COMP%]{background-color:#2980b9}.ft-step-title[_ngcontent-%COMP%]{font-size:18px;margin:0 0 16px}.ft-step-description[_ngcontent-%COMP%]{font-size:16px;line-height:1.4;margin:0 0 16px}.ft-step-bullet-list[_ngcontent-%COMP%]{align-items:center;display:flex;margin:0 0 16px}.ft-step-bullet[_ngcontent-%COMP%]{background-color:#bdc3c7;border-radius:50%;display:block;height:10px;margin-right:10px;width:10px}.ft-lens[_ngcontent-%COMP%]{box-shadow:0 0 0 1000em rgba(0,0,0,.75);position:fixed;transition:left .3s linear,top .3s linear,width .3s linear,height .3s linear;z-index:9990}.ft-step-controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.ft-step-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:#fff;border:2px solid #2980b9;border-radius:4px;color:#2980b9;font-size:14px;font-weight:700;padding:8px 12px}.ft-step-navigation[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.ft-step-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#2980b9;color:#fff;margin-left:16px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgFeatureTourComponent, [{
        type: Component,
        args: [{
                selector: 'ng-feature-tour',
                templateUrl: './ng-feature-tour.component.html',
                styleUrls: ['./ng-feature-tour.component.scss'],
            }]
    }], function () { return [{ type: FeatureTourService }]; }, { steps: [{
            type: Input
        }], onEscapeHandler: [{
            type: HostListener,
            args: ['document:keydown.escape', ['$event']]
        }] }); })();

class NgFeatureTourModule {
}
NgFeatureTourModule.ɵmod = ɵɵdefineNgModule({ type: NgFeatureTourModule });
NgFeatureTourModule.ɵinj = ɵɵdefineInjector({ factory: function NgFeatureTourModule_Factory(t) { return new (t || NgFeatureTourModule)(); }, imports: [[BrowserModule, A11yModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgFeatureTourModule, { declarations: [NgFeatureTourComponent,
        AriaDescriptionPipe,
        AriaLabelPipe,
        IdentifyPipe], imports: [BrowserModule, A11yModule], exports: [NgFeatureTourComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgFeatureTourModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { EventEnum, FeatureTourService, NgFeatureTourComponent, NgFeatureTourModule };
//# sourceMappingURL=ng-feature-tour.js.map
