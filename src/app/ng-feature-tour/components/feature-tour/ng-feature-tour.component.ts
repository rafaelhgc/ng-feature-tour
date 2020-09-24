import { Component, OnInit, HostListener, Input } from '@angular/core';

import { FeatureTourConfig } from '../../models/feature-tour-config';
import { FeatureTourStep } from '../../models/feature-tour-step';
import { EventEnum, StepBounds } from '../../ng-feature-tour.model';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
  styleUrls: ['./ng-feature-tour.component.scss'],
})
export class NgFeatureTourComponent implements OnInit {
  @Input()
  tour: FeatureTourConfig;
  steps: FeatureTourStep[];
  enabled: boolean;

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

  private disableTour(step: FeatureTourStep, event: EventEnum): void {
    this.enabled = false;
    this.emitChangeEvent(step, event);
  }

  private scrollToTop(step: FeatureTourStep): void {
    const stepElement = document.getElementById(step.target);
    window.scrollTo(0, stepElement.offsetTop - 16);
  }

  private emitChangeEvent(step: FeatureTourStep, event: EventEnum): void {
    console.log('TODO EMITTER');
  }

  private getBounds(step: HTMLElement, target: HTMLElement): StepBounds {
    const margin = 32;
    const stepRect = step.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    let left: number;
    let top: number;
    let modifiers: string[] = [];

    // axis y
    if (
      targetRect.y >
      screen.availHeight - (targetRect.y + targetRect.height)
    ) {
      modifiers.push('to-top');
      top = targetRect.y - stepRect.height - margin;
    } else {
      modifiers.push('to-bottom');
      top = targetRect.y + targetRect.height + margin;
    }

    // axis x
    if (targetRect.x > screen.availWidth / 2) {
      modifiers.push('to-right');
      left = targetRect.x + targetRect.width - stepRect.width;
    } else {
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

  private captureFocus(step: FeatureTourStep): void {
    const trapFocus = document.getElementById(step.id).querySelector('h2');
    setTimeout(() => {
      (trapFocus as HTMLElement).focus();
    }, 1);
  }

  private enableStep(
    step: FeatureTourStep,
    toAbortStep?: FeatureTourStep
  ): void {
    this.scrollToTop(step);
    this.enabled = true;
    step.enabled = true;

    // render delay trick
    setTimeout(() => {
      step.visible = true;
      this.captureFocus(step);

      if (toAbortStep) {
        this.disableStep(toAbortStep);
      }
    }, 0);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeHandler(event?: KeyboardEvent) {
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

  close(step: FeatureTourStep): void {
    step.enabled = false;
    step.visible = false;
    this.enabled = false;
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

  previous(step: FeatureTourStep): void {
    const previousStep = this.steps[step.index - 1];

    this.disableStep(step);
    this.enableStep(previousStep);
    this.emitChangeEvent(step, EventEnum.Previous);
  }

  next(step: FeatureTourStep): void {
    const nextStep = this.steps[step.index + 1];

    this.disableStep(step);
    this.enableStep(nextStep);
    this.emitChangeEvent(step, EventEnum.Previous);
  }

  finish(currentStep: FeatureTourStep): void {
    this.disableStep(currentStep);
    this.disableTour(currentStep, EventEnum.Finish);
  }

  abort(step: FeatureTourStep): void {
    this.disableStep(step);
    this.disableTour(step, EventEnum.Abort);
  }
}
