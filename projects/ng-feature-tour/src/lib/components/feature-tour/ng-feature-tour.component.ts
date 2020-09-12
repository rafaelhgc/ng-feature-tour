import { Component, OnInit, HostListener, Input } from '@angular/core';

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
  steps: Step[];

  enabled: boolean;

  setup: Setup;

  constructor(private featureTourService: FeatureTourService) {}

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
    const stepId = `ft-step-${step.target}`;
    const tabable = document.querySelectorAll(`#${stepId} [tabindex]`).item(0);

    setTimeout(() => {
      (<HTMLElement>tabable).focus();
    }, 1);
  }

  private enableStep(step: Step): void {
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

  ngOnInit(): void {
    if (!this.steps || this.steps.length === 0) {
      throw 'NgFeatureTourComponent: no steps provided';
    }

    this.featureTourService.initialize.subscribe((setup: Setup) => {
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

    this.disableStep(currentStep);
    this.enableStep(step);
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
