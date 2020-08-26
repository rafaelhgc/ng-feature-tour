import {
  Component,
  Input,
  ViewChild,
  Renderer2,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

import { TourStep } from './ng-feature-tour.model';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
  styleUrls: ['./ng-feature-tour.component.scss'],
})
export class NgFeatureTourComponent {
  @Output()
  onNext: EventEmitter<TourStep>;

  @Output()
  onPrevious: EventEmitter<TourStep>;

  @Output()
  onAbort: EventEmitter<TourStep>;

  @Output()
  onFinish: EventEmitter<TourStep>;

  @Input()
  steps: TourStep[];

  @Input()
  stepIndex: number = 0;

  @ViewChild('step')
  stepRef: ElementRef;

  @ViewChild('scope')
  stepScopeRef: ElementRef;

  currentStep: TourStep;

  constructor(private renderer: Renderer2) {
    this.onAbort = new EventEmitter<TourStep>();
    this.onFinish = new EventEmitter<TourStep>();
    this.onNext = new EventEmitter<TourStep>();
    this.onPrevious = new EventEmitter<TourStep>();
  }

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
    this.onFinish.emit(this.currentStep);
    this.currentStep = null;
    this.stepIndex = 0;
  }

  abort(): void {
    this.onAbort.emit(this.currentStep);
    this.currentStep = null;
    this.stepIndex = 0;
  }

  next(): void {
    this.stepIndex++;
    this.setCurrentStep();
    this.applyStepBounds();
    this.onNext.emit(this.currentStep);
  }

  previous(): void {
    this.stepIndex--;
    this.setCurrentStep();
    this.applyStepBounds();
    this.onPrevious.emit(this.currentStep);
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
