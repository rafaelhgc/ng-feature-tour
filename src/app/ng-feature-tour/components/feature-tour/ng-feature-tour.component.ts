import { Component, OnInit, HostListener, Input } from '@angular/core';

import { FeatureTourConfig } from '../../models/feature-tour-config';
import { FeatureTourStep } from '../../models/feature-tour-step';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
})
export class NgFeatureTourComponent implements OnInit {
  @Input()
  tour: FeatureTourConfig;
  steps: FeatureTourStep[];

  constructor() {}

  ngOnInit(): void {
    this.steps = this.tour.steps.map((step, i) => ({
      id: `feature-tour-step-${step.target}`,
      target: step.target,
      index: i,
      total: this.tour.steps.length,
      title: step.title,
      description: step.description,
      visible: false,
      enabled: false,
      a11y: {
        ariaDescription: step.description,
        ariaLabel: this.tour.a11y.ariaLabel,
        pagination: this.tour.a11y.pagination,
      },
      controls: {
        abort: {
          label: this.tour.controls.abort,
          enabled: true,
        },
        previous: {
          label: this.tour.controls.previous,
          enabled: i > 0,
        },
        next: {
          label: this.tour.controls.next,
          enabled: i !== this.tour.steps.length - 1,
        },
        done: {
          label: this.tour.controls.done,
          enabled: i === this.tour.steps.length - 1,
        },
      },
    }));
  }

  start(target?: string): void {
    const step = this.steps.filter((step) => step.target === target).shift();

    if (step) {
      this.enableStep(step);
    } else {
      this.enableStep(this.steps[0]);
    }
  }

  private disableStep(step: FeatureTourStep): void {
    step.enabled = false;
    step.visible = false;
  }

  private scrollToTop(step: FeatureTourStep): void {
    const stepElement = document.getElementById(step.target);
    window.scrollTo(0, stepElement.offsetTop - 16);
  }

  private captureFocus(step: FeatureTourStep): void {
    const trapFocus = document.getElementById(step.id).querySelector('h2');
    setTimeout(() => {
      (trapFocus as HTMLElement).focus();
    }, 1);
  }

  private enableStep(step: FeatureTourStep): void {
    this.scrollToTop(step);
    step.enabled = true;

    // render delay trick
    setTimeout(() => {
      step.visible = true;
      this.captureFocus(step);
    }, 0);
  }

  close(step: FeatureTourStep): void {
    step.enabled = false;
    step.visible = false;
  }

  isLastStep(stepIndex: number): boolean {
    return stepIndex === this.steps.length - 1;
  }

  isFirstStep(stepIndex: number): boolean {
    return stepIndex === 0;
  }

  getAriasIdentifiers(target: string): string {
    return `ft-title-${target} ft-description-${target}`;
  }

  previous(step: FeatureTourStep): void {}

  next(step: FeatureTourStep): void {}

  finish(currentStep: FeatureTourStep): void {}

  abort(step: FeatureTourStep): void {}
}
