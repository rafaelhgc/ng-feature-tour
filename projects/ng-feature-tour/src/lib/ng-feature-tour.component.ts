import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

import { NgTourEventService } from './services/ng-feature-tour-event.service';
import { NgTourStep } from './models/ng-feature-tour-step.model';
import { NgTourEventEnum } from './models/ng-feature-tour-event.model';
import {
  LensBounds,
  StepBounds,
  TourBounds,
} from './models/ng-feature-tour-bounds.model';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
  styleUrls: ['./ng-feature-tour.component.scss'],
})
export class NgFeatureTourComponent implements OnInit {
  @ViewChild('step')
  stepRef: ElementRef;

  @ViewChild('lens')
  lensRef: ElementRef;

  @Input()
  steps: NgTourStep[];

  @Input()
  initialStepTarget: string;

  currentStep: NgTourStep;

  bounds: TourBounds;

  constructor(private ngTourEventService: NgTourEventService) {}

  ngOnInit(): void {
    this.ngTourEventService.initialize.subscribe(() => this.start());
  }

  private scrollToTop({ target }: NgTourStep): void {
    window.scrollTo(0, document.getElementById(target).offsetTop - 16);
  }

  private getStepByTarget(target: string): NgTourStep {
    return this.steps.filter((step) => step.target === target).pop();
  }

  private getIndexFromStep(search?: NgTourStep): number {
    const step = search || this.currentStep;

    if (!step) {
      return -1;
    }

    return this.steps.map(({ target }) => target).indexOf(step.target);
  }

  private emitChangeEvent(step: NgTourStep, event: NgTourEventEnum): void {
    this.ngTourEventService.onChange.emit({ event: event, step: step });
  }

  private getStepBounds(target: DOMRect): StepBounds {
    const margin = 32;
    const stepRect = this.stepRef.nativeElement.getBoundingClientRect();

    let left: number;
    let top: number;
    let modifierClasses: string[] = [];

    // axis y
    if (target.y > screen.availHeight - (target.y + target.height)) {
      modifierClasses.push('to-top');
      top = target.y - stepRect.height - margin;
    } else {
      modifierClasses.push('to-bottom');
      top = target.y + target.height + margin;
    }

    // axis x
    if (target.x > screen.availWidth / 2) {
      modifierClasses.push('to-right');
      left = target.x + target.width - stepRect.width;
    } else {
      modifierClasses.push('to-left');
      left = target.x;
    }

    return {
      left,
      top,
      maxWidth: screen.availWidth / 4,
      modifierClasses: modifierClasses.join(' '),
    };
  }

  private getLensBounds(target: DOMRect): LensBounds {
    const { y, x, width, height } = target;

    return { top: y, left: x, width, height };
  }

  private applyBounds(): void {
    const targetRect = document
      .getElementById(this.currentStep.target)
      .getBoundingClientRect();
    const step = this.getStepBounds(targetRect);
    const lens = this.getLensBounds(targetRect);

    this.bounds = { step, lens };
  }

  private setFocus(): void {
    this.scrollToTop(this.currentStep);
    setTimeout(() => {
      this.applyBounds();
      this.stepRef.nativeElement.children.item(0).focus();
    }, 0);
  }

  private changeStep(event: NgTourEventEnum, step?: NgTourStep): void {
    this.currentStep = step;
    this.emitChangeEvent(this.currentStep, event);
    this.setFocus();
  }

  start() {
    let initialStep: NgTourStep;

    if (this.initialStepTarget) {
      initialStep = this.getStepByTarget(this.initialStepTarget);
    } else {
      initialStep = this.steps[0];
    }

    this.changeStep(NgTourEventEnum.Start, initialStep);
  }

  next(): void {
    const stepIndex = this.getIndexFromStep();
    const nextStep = this.steps[stepIndex + 1];

    this.changeStep(NgTourEventEnum.Next, nextStep);
  }

  previous(): void {
    const stepIndex = this.getIndexFromStep();
    const previousStep = this.steps[stepIndex - 1];

    this.changeStep(NgTourEventEnum.Previous, previousStep);
  }

  finish(): void {
    this.emitChangeEvent(this.currentStep, NgTourEventEnum.Finish);
    this.currentStep = null;
  }

  abort(): void {
    this.emitChangeEvent(this.currentStep, NgTourEventEnum.Abort);
    this.currentStep = null;
  }

  isLastStep(): boolean {
    const currentStepIndex = this.getIndexFromStep();

    return this.currentStep && currentStepIndex === this.steps.length - 1;
  }

  isFirstStep(): boolean {
    const currentStepIndex = this.getIndexFromStep();

    return currentStepIndex === 0;
  }
}
