import { Component, OnInit, HostListener, Input } from '@angular/core';
import { FeatureTourConfig } from '../../models/feature-tour-config';

import {
  Step,
  EventEnum,
  StepBounds,
  Setup,
} from '../../ng-feature-tour.model';
import { FeatureTourService } from '../../ng-feature-tour.service';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
  styleUrls: ['./ng-feature-tour.component.scss'],
})
export class NgFeatureTourComponent implements OnInit {
  @Input()
  tour: FeatureTourConfig;
  steps: Step[];
  enabled: boolean;
  setup: Setup;

  constructor(private featureTourService: FeatureTourService) {}

  ngOnInit(): void {
    console.log(this.tour);
  }

  private disableStep(step: Step): void {
    step.enabled = false;
    step.visible = false;
  }

  private disableTour(step: Step, event: EventEnum): void {
    this.enabled = false;
    this.emitChangeEvent(step, event);
  }

  private scrollToTop(step: Step): void {
    window.scrollTo(0, document.getElementById(step.target).offsetTop - 16);
  }

  private emitChangeEvent(step: Step, event: EventEnum): void {
    this.featureTourService.onChange.emit({ event, step });
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

  private applyBounds(step: Step): void {
    const stepId = `ft-step-${step.target}`;
    const targetElement = document.getElementById(step.target);
    const stepElement = document.getElementById(stepId);

    step.bounds = this.getBounds(stepElement, targetElement);
  }

  private captureFocus(step: Step): void {
    const trapFocus = document.querySelector(`#ft-step-${step.target} h2`);
    setTimeout(() => (trapFocus as HTMLElement).focus(), 0);
  }

  private enableStep(step: Step, toAbortStep?: Step): void {
    this.scrollToTop(step);
    this.enabled = true;
    step.enabled = true;

    // render delay trick
    setTimeout(() => {
      step.visible = true;
      this.applyBounds(step);
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

  close(step: Step): void {
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

  previous(currentStep: Step, currentStepIndex: number): void {
    const step = this.steps[currentStepIndex - 1];

    this.disableStep(currentStep);
    this.enableStep(step);
    this.emitChangeEvent(step, EventEnum.Previous);
  }

  next(currentStep: Step, currentStepIndex: number): void {
    const step = this.steps[currentStepIndex + 1];

    this.enableStep(step, currentStep);
    this.emitChangeEvent(step, EventEnum.Next);
  }

  finish(currentStep: Step): void {
    this.disableStep(currentStep);
    this.disableTour(currentStep, EventEnum.Finish);
  }

  abort(currentStep: Step): void {
    this.disableStep(currentStep);
    this.disableTour(currentStep, EventEnum.Abort);
  }
}
