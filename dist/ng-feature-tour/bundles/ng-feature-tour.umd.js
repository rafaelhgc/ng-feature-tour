(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/a11y'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng-feature-tour', ['exports', '@angular/core', '@angular/common', '@angular/cdk/a11y', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['ng-feature-tour'] = {}, global.ng.core, global.ng.common, global.ng.cdk.a11y, global.ng.platformBrowser));
}(this, (function (exports, i0, i2, i3, platformBrowser) { 'use strict';

    (function (EventEnum) {
        EventEnum["Start"] = "START";
        EventEnum["Next"] = "NEXT";
        EventEnum["Previous"] = "PREVIOUS";
        EventEnum["Abort"] = "ABORT";
        EventEnum["Finish"] = "FINISH";
        EventEnum["Escape"] = "ESCAPE";
    })(exports.EventEnum || (exports.EventEnum = {}));

    var FeatureTourService = /** @class */ (function () {
        function FeatureTourService() {
            this.onChange = new i0.EventEmitter();
            this.initialize = new i0.EventEmitter();
        }
        return FeatureTourService;
    }());
    FeatureTourService.ɵfac = function FeatureTourService_Factory(t) { return new (t || FeatureTourService)(); };
    FeatureTourService.ɵprov = i0.ɵɵdefineInjectable({ token: FeatureTourService, factory: FeatureTourService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FeatureTourService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return []; }, null);
    })();

    var IdentifyPipe = /** @class */ (function () {
        function IdentifyPipe() {
        }
        IdentifyPipe.prototype.transform = function (step, prefix) {
            if (prefix === void 0) { prefix = 'ft-step'; }
            return prefix + "-" + step.target;
        };
        return IdentifyPipe;
    }());
    IdentifyPipe.ɵfac = function IdentifyPipe_Factory(t) { return new (t || IdentifyPipe)(); };
    IdentifyPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "identify", type: IdentifyPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IdentifyPipe, [{
                type: i0.Pipe,
                args: [{ name: 'identify' }]
            }], null, null);
    })();

    var AriaDescriptionPipe = /** @class */ (function () {
        function AriaDescriptionPipe() {
        }
        AriaDescriptionPipe.prototype.transform = function (step) {
            return step.title + ". " + step.description + ".";
        };
        return AriaDescriptionPipe;
    }());
    AriaDescriptionPipe.ɵfac = function AriaDescriptionPipe_Factory(t) { return new (t || AriaDescriptionPipe)(); };
    AriaDescriptionPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "ariaDescription", type: AriaDescriptionPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AriaDescriptionPipe, [{
                type: i0.Pipe,
                args: [{ name: 'ariaDescription' }]
            }], null, null);
    })();

    var AriaLabelPipe = /** @class */ (function () {
        function AriaLabelPipe() {
        }
        AriaLabelPipe.prototype.transform = function (label, total, index) {
            index = index + 1;
            return label
                .replace('{total}', total.toString())
                .replace('{index}', index.toString());
        };
        return AriaLabelPipe;
    }());
    AriaLabelPipe.ɵfac = function AriaLabelPipe_Factory(t) { return new (t || AriaLabelPipe)(); };
    AriaLabelPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "ariaLabel", type: AriaLabelPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AriaLabelPipe, [{
                type: i0.Pipe,
                args: [{ name: 'ariaLabel' }]
            }], null, null);
    })();

    function NgFeatureTourComponent_div_0_div_1_span_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 15);
        }
        if (rf & 2) {
            var step_r9 = ctx.$implicit;
            i0.ɵɵclassProp("is-current", step_r9.enabled);
        }
    }
    function NgFeatureTourComponent_div_0_div_1_button_15_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12_1); var step_r2 = i0.ɵɵnextContext().$implicit; var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.abort(step_r2); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("innerHTML", ctx_r5.setup.controls.abort, i0.ɵɵsanitizeHtml);
        }
    }
    function NgFeatureTourComponent_div_0_div_1_button_17_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(); var step_r2 = ctx_r14.$implicit; var index_r3 = ctx_r14.index; var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.previous(step_r2, index_r3); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("innerHTML", ctx_r6.setup.controls.previous, i0.ɵɵsanitizeHtml);
        }
    }
    function NgFeatureTourComponent_div_0_div_1_button_18_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); var step_r2 = ctx_r17.$implicit; var index_r3 = ctx_r17.index; var ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.next(step_r2, index_r3); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("innerHTML", ctx_r7.setup.controls.next, i0.ɵɵsanitizeHtml);
        }
    }
    function NgFeatureTourComponent_div_0_div_1_button_19_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21_1); var step_r2 = i0.ɵɵnextContext().$implicit; var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.finish(step_r2); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("innerHTML", ctx_r8.setup.controls.done, i0.ɵɵsanitizeHtml);
        }
    }
    function NgFeatureTourComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3);
            i0.ɵɵelementStart(1, "div", 4);
            i0.ɵɵlistener("click", function NgFeatureTourComponent_div_0_div_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onEscapeHandler(); });
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
        }
        if (rf & 2) {
            var step_r2 = ctx.$implicit;
            var index_r3 = ctx.index;
            var ctx_r1 = i0.ɵɵnextContext(2);
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
        }
    }
    function NgFeatureTourComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtemplate(1, NgFeatureTourComponent_div_0_div_1_Template, 20, 36, "div", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.steps);
        }
    }
    var NgFeatureTourComponent = /** @class */ (function () {
        function NgFeatureTourComponent(featureTourService) {
            this.featureTourService = featureTourService;
        }
        NgFeatureTourComponent.prototype.disableStep = function (step) {
            step.enabled = false;
            step.visible = false;
        };
        NgFeatureTourComponent.prototype.disableTour = function (step, event) {
            this.enabled = false;
            this.emitChangeEvent(step, event);
        };
        NgFeatureTourComponent.prototype.scrollToTop = function (step) {
            window.scrollTo(0, document.getElementById(step.target).offsetTop - 16);
        };
        NgFeatureTourComponent.prototype.emitChangeEvent = function (step, event) {
            this.featureTourService.onChange.emit({ event: event, step: step });
        };
        NgFeatureTourComponent.prototype.getBounds = function (step, target) {
            var margin = 32;
            var stepRect = step.getBoundingClientRect();
            var targetRect = target.getBoundingClientRect();
            var left;
            var top;
            var modifiers = [];
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
                left: left,
                top: top,
                modifiers: modifiers.join(' '),
                lens: {
                    left: targetRect.left,
                    top: targetRect.top,
                    width: targetRect.width,
                    height: targetRect.height,
                },
            };
        };
        NgFeatureTourComponent.prototype.applyBounds = function (step) {
            var stepId = "ft-step-" + step.target;
            var targetElement = document.getElementById(step.target);
            var stepElement = document.getElementById(stepId);
            step.bounds = this.getBounds(stepElement, targetElement);
        };
        NgFeatureTourComponent.prototype.captureFocus = function (step) {
            var stepId = "ft-step-" + step.target;
            var tabable = document.querySelectorAll("#" + stepId + " [tabindex]").item(0);
            setTimeout(function () {
                tabable.focus();
            }, 1);
        };
        NgFeatureTourComponent.prototype.enableStep = function (step) {
            var _this = this;
            this.scrollToTop(step);
            this.enabled = true;
            step.enabled = true;
            // render delay trick
            setTimeout(function () {
                step.visible = true;
                _this.applyBounds(step);
                _this.captureFocus(step);
            }, 1);
        };
        NgFeatureTourComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.steps || this.steps.length === 0) {
                throw 'NgFeatureTourComponent: no steps provided';
            }
            this.featureTourService.initialize.subscribe(function (setup) {
                var initialStep = _this.steps
                    .filter(function (step) { return step.target === setup.initialStep; })
                    .shift();
                if (!initialStep) {
                    throw "NgFeatureTourComponent: target \"" + setup.initialStep + "\" not found";
                }
                _this.setup = setup;
                _this.enableStep(initialStep);
            });
        };
        NgFeatureTourComponent.prototype.onEscapeHandler = function (event) {
            if (!this.steps) {
                return;
            }
            var currentStep = this.steps.filter(function (_a) {
                var enabled = _a.enabled;
                return enabled;
            }).shift();
            if (!currentStep) {
                return;
            }
            this.close(currentStep);
            this.emitChangeEvent(currentStep, exports.EventEnum.Escape);
        };
        NgFeatureTourComponent.prototype.close = function (step) {
            step.enabled = false;
            step.visible = false;
            this.enabled = false;
        };
        NgFeatureTourComponent.prototype.isLastStep = function (stepIndex) {
            return stepIndex === this.steps.length - 1;
        };
        NgFeatureTourComponent.prototype.isFirstStep = function (stepIndex) {
            return stepIndex === 0;
        };
        NgFeatureTourComponent.prototype.getAriasIdentifiers = function (target) {
            return "ft-title-" + target + " ft-description-" + target;
        };
        NgFeatureTourComponent.prototype.previous = function (currentStep, currentStepIndex) {
            var step = this.steps[currentStepIndex - 1];
            this.disableStep(currentStep);
            this.enableStep(step);
            this.emitChangeEvent(step, exports.EventEnum.Previous);
        };
        NgFeatureTourComponent.prototype.next = function (currentStep, currentStepIndex) {
            var step = this.steps[currentStepIndex + 1];
            this.disableStep(currentStep);
            this.enableStep(step);
            this.emitChangeEvent(step, exports.EventEnum.Next);
        };
        NgFeatureTourComponent.prototype.finish = function (currentStep) {
            this.disableStep(currentStep);
            this.disableTour(currentStep, exports.EventEnum.Finish);
        };
        NgFeatureTourComponent.prototype.abort = function (currentStep) {
            this.disableStep(currentStep);
            this.disableTour(currentStep, exports.EventEnum.Abort);
        };
        return NgFeatureTourComponent;
    }());
    NgFeatureTourComponent.ɵfac = function NgFeatureTourComponent_Factory(t) { return new (t || NgFeatureTourComponent)(i0.ɵɵdirectiveInject(FeatureTourService)); };
    NgFeatureTourComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgFeatureTourComponent, selectors: [["ng-feature-tour"]], hostBindings: function NgFeatureTourComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown.escape", function NgFeatureTourComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeHandler($event); }, false, i0.ɵɵresolveDocument);
            }
        }, inputs: { steps: "steps" }, decls: 1, vars: 1, consts: [["class", "ft-wrapper", "cdkTrapFocus", "", 4, "ngIf"], ["cdkTrapFocus", "", 1, "ft-wrapper"], [3, "hidden", 4, "ngFor", "ngForOf"], [3, "hidden"], [1, "ft-scape-handler", 3, "click"], [1, "ft-lens"], ["aria-modal", "true", "role", "dialog", 3, "id"], [1, "ft-step-title"], [1, "ft-step-description"], [1, "ft-step-bullet-list"], ["class", "ft-step-bullet", 3, "is-current", 4, "ngFor", "ngForOf"], [1, "ft-step-controls"], [1, "ft-step-abort"], ["type", "button", "tabindex", "0", 3, "innerHTML", "click", 4, "ngIf"], [1, "ft-step-navigation"], [1, "ft-step-bullet"], ["type", "button", "tabindex", "0", 3, "innerHTML", "click"]], template: function NgFeatureTourComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, NgFeatureTourComponent_div_0_Template, 2, 1, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.enabled);
            }
        }, directives: [i2.NgIf, i3.CdkTrapFocus, i2.NgForOf], pipes: [IdentifyPipe, AriaDescriptionPipe, AriaLabelPipe], styles: [".ft-scape-handler[_ngcontent-%COMP%]{background-color:initial;height:100vh;left:0;position:fixed;top:0;width:100%;z-index:9900}.ft-step[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;color:#444;max-width:320px;min-width:320px;padding:16px;position:fixed;transition:left .3s linear,top .3s linear,width .3s linear;z-index:9999}.ft-step[_ngcontent-%COMP%]:before{border-color:#fff transparent;border-style:solid;border-width:16px;content:\"\";height:0;position:absolute;width:0}.ft-step.to-top[_ngcontent-%COMP%]:before{border-bottom-color:transparent;bottom:-31px}.ft-step.to-bottom[_ngcontent-%COMP%]:before{border-top-color:transparent;top:-31px}.ft-step.to-left[_ngcontent-%COMP%]:before{left:16px}.ft-step.to-right[_ngcontent-%COMP%]:before{right:16px}.ft-step-bullet.is-current[_ngcontent-%COMP%]{background-color:#2980b9}.ft-step-title[_ngcontent-%COMP%]{font-size:18px;margin:0 0 16px}.ft-step-description[_ngcontent-%COMP%]{font-size:16px;line-height:1.4;margin:0 0 16px}.ft-step-bullet-list[_ngcontent-%COMP%]{align-items:center;display:flex;margin:0 0 16px}.ft-step-bullet[_ngcontent-%COMP%]{background-color:#bdc3c7;border-radius:50%;display:block;height:10px;margin-right:10px;width:10px}.ft-lens[_ngcontent-%COMP%]{box-shadow:0 0 0 1000em rgba(0,0,0,.75);position:fixed;transition:left .3s linear,top .3s linear,width .3s linear,height .3s linear;z-index:9990}.ft-step-controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.ft-step-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:#fff;border:2px solid #2980b9;border-radius:4px;color:#2980b9;font-size:14px;font-weight:700;padding:8px 12px}.ft-step-navigation[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.ft-step-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#2980b9;color:#fff;margin-left:16px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgFeatureTourComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-feature-tour',
                        templateUrl: './ng-feature-tour.component.html',
                        styleUrls: ['./ng-feature-tour.component.scss'],
                    }]
            }], function () { return [{ type: FeatureTourService }]; }, { steps: [{
                    type: i0.Input
                }], onEscapeHandler: [{
                    type: i0.HostListener,
                    args: ['document:keydown.escape', ['$event']]
                }] });
    })();

    var NgFeatureTourModule = /** @class */ (function () {
        function NgFeatureTourModule() {
        }
        return NgFeatureTourModule;
    }());
    NgFeatureTourModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgFeatureTourModule });
    NgFeatureTourModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgFeatureTourModule_Factory(t) { return new (t || NgFeatureTourModule)(); }, imports: [[platformBrowser.BrowserModule, i3.A11yModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgFeatureTourModule, { declarations: [NgFeatureTourComponent,
                AriaDescriptionPipe,
                AriaLabelPipe,
                IdentifyPipe], imports: [platformBrowser.BrowserModule, i3.A11yModule], exports: [NgFeatureTourComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgFeatureTourModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NgFeatureTourComponent,
                            AriaDescriptionPipe,
                            AriaLabelPipe,
                            IdentifyPipe,
                        ],
                        imports: [platformBrowser.BrowserModule, i3.A11yModule],
                        exports: [NgFeatureTourComponent],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FeatureTourService = FeatureTourService;
    exports.NgFeatureTourComponent = NgFeatureTourComponent;
    exports.NgFeatureTourModule = NgFeatureTourModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-feature-tour.umd.js.map
