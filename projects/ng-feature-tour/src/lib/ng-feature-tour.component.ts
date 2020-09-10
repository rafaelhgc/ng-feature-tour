import { Component, OnInit, HostListener, Input } from '@angular/core';

import {
  FeatureTourStep,
  FeatureTourEventEnum,
  FeatureTourStepBounds,
} from './ng-feature-tour.model';
import { FeatureTourService } from './ng-feature-tour.service';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
  styleUrls: ['./ng-feature-tour.component.scss'],
})
export class NgFeatureTourComponent implements OnInit {
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeHandler(event: KeyboardEvent) {
    event.preventDefault();
    this.escape();
  }

  @Input()
  steps: FeatureTourStep[];

  enabled: boolean;

  constructor(private ngTourEventService: FeatureTourService) {}

  private scrollToTop(step: FeatureTourStep): void {
    window.scrollTo(0, document.getElementById(step.target).offsetTop - 16);
  }

  private emitChangeEvent(
    step: FeatureTourStep,
    event: FeatureTourEventEnum
  ): void {
    this.ngTourEventService.onChange.emit({ event: event, step: step });
  }

  private getBounds(
    step: HTMLElement,
    target: HTMLElement
  ): FeatureTourStepBounds {
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

  private applyBounds(step: FeatureTourStep): void {
    const stepId = `ft-step-${step.target}`;
    const targetElement = document.getElementById(step.target);
    const stepElement = document.getElementById(stepId);

    step.bounds = this.getBounds(stepElement, targetElement);
  }

  private setFocus(step: FeatureTourStep): void {
    this.scrollToTop(step);
    this.enabled = true;
    step.enabled = true;

    // render delay trick
    setTimeout(() => {
      this.applyBounds(step);
      step.visible = true;
    }, 1);
  }

  ngOnInit(): void {
    if (!this.steps || this.steps.length === 0) {
      throw 'NgFeatureTourComponent: no steps provided';
    }

    this.ngTourEventService.initialize.subscribe((target: string) => {
      const initialStep = this.steps
        .filter((step) => step.target === target)
        .shift();

      if (!initialStep) {
        throw `NgFeatureTourComponent: target "${target}" not found`;
      }

      this.setFocus(initialStep);
    });
  }

  next(stepIndex: number): void {
    const currentStep = this.steps[stepIndex];

    currentStep.enabled = false;
    this.setFocus(this.steps[stepIndex + 1]);
  }

  previous(stepIndex: number): void {
    const currentStep = this.steps[stepIndex];

    currentStep.enabled = false;
    this.setFocus(this.steps[stepIndex - 1]);
  }

  finish(): void {}

  escape(): void {}

  abort(): void {}

  isLastStep(stepIndex: number): boolean {
    return stepIndex === this.steps.length - 1;
  }

  isFirstStep(stepIndex: number): boolean {
    return stepIndex === 0;
  }

  getAriasIdentifiers(target: string): string {
    return `ft-title-${target} ft-description-${target}`;
  }

  getRoleDescription(step: FeatureTourStep, stepIndex: number): string {
    const count = this.steps.length;
    const current = stepIndex + 1;

    return `Tour composto por ${count} passos.
            Você está no passo ${current}. ${step.title}.
            ${step.description}`;
  }
}
