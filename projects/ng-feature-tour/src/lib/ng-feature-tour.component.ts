import {
  Component,
  Input,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';

import { TourStep } from './ng-feature-tour.model';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
  styleUrls: ['./ng-feature-tour.component.scss'],
})
export class NgFeatureTourComponent {
  @Input()
  steps: TourStep[];

  @Input()
  stepIndex: number = 0;

  @ViewChild('step')
  stepRef: ElementRef;

  @ViewChild('scope')
  stepScopeRef: ElementRef;

  currentStep: TourStep;

  constructor(private renderer: Renderer2) {}

  private applyStepBounds(): void {
    const { height, width, x, y, bottom } = this.getStepBounds();
    const arrowBoundSpace = 32;
    const stepElement = this.stepRef.nativeElement;
    const scopeElement = this.stepScopeRef.nativeElement;

    this.renderer.setStyle(stepElement, 'left', `${x}px`);
    this.renderer.setStyle(stepElement, 'top', `${bottom + arrowBoundSpace}px`);
    this.renderer.setStyle(scopeElement, 'width', `${width}px`);
    this.renderer.setStyle(scopeElement, 'height', `${height}px`);
    this.renderer.setStyle(scopeElement, 'left', `${x}px`);
    this.renderer.setStyle(scopeElement, 'top', `${y}px`);
  }

  private getStepBounds(): DOMRect {
    return document
      .getElementById(this.currentStep.target)
      .getBoundingClientRect();
  }

  start(): void {
    this.setCurrentStep();
    this.applyStepBounds();
  }

  finish(): void {
    this.currentStep = null;
  }

  next(): void {
    this.stepIndex++;
    this.setCurrentStep();
    this.applyStepBounds();
  }

  previous(): void {
    this.stepIndex--;
    this.setCurrentStep();
    this.applyStepBounds();
  }

  setCurrentStep(): void {
    this.currentStep = this.steps[this.stepIndex];
  }

  isFirstStep(): boolean {
    return this.stepIndex === 0;
  }

  isLastStep(): boolean {
    return this.stepIndex === this.steps.length - 1;
  }
}
