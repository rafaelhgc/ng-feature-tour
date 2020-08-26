import {
  Component,
  Renderer2,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { TourStep, TourEvent } from './ng-feature-tour.model';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
  styleUrls: ['./ng-feature-tour.component.scss'],
})
export class NgFeatureTourComponent {
  @ViewChild('step')
  stepRef: ElementRef;

  @ViewChild('lens')
  lensRef: ElementRef;

  @Input()
  steps: TourStep[];

  @Input()
  initialStepTarget: string;

  @Output()
  onNext: EventEmitter<TourEvent>;

  @Output()
  onPrevious: EventEmitter<TourEvent>;

  @Output()
  onAbort: EventEmitter<TourEvent>;

  @Output()
  onFinish: EventEmitter<TourEvent>;

  currentStep: TourStep;

  currentStepIndex: number;

  stepTrack: string[];

  constructor(private renderer: Renderer2) {
    this.onNext = new EventEmitter<TourEvent>();
    this.onPrevious = new EventEmitter<TourEvent>();
    this.onAbort = new EventEmitter<TourEvent>();
    this.onFinish = new EventEmitter<TourEvent>();
  }

  private scrollToTop(target: string): void {
    window.scrollTo(0, document.getElementById(target).offsetTop - 16);
  }

  private getIndexFromTarget(target: string): number {
    let index = -1;

    this.steps.forEach((step, i) => {
      if (step.target === target) {
        index = i;
      }
    });

    return index;
  }

  private applyBounds(target: string): void {
    const rect = document.getElementById(target).getBoundingClientRect();
    const step = this.stepRef.nativeElement;
    const lens = this.lensRef.nativeElement;

    this.renderer.setStyle(step, 'top', `${rect.bottom + 32}px`);
    this.renderer.setStyle(step, 'left', `${rect.left}px`);

    this.renderer.setStyle(lens, 'top', `${rect.top}px`);
    this.renderer.setStyle(lens, 'left', `${rect.left}px`);
    this.renderer.setStyle(lens, 'width', `${rect.width}px`);
    this.renderer.setStyle(lens, 'height', `${rect.height}px`);
  }

  start() {
    this.stepTrack = [];
    this.initialStepTarget = this.initialStepTarget || this.steps[0].target;
    this.currentStepIndex = this.getIndexFromTarget(this.initialStepTarget);
    this.currentStep = this.steps[this.currentStepIndex];
    this.stepTrack.push(this.currentStep.target);
    this.scrollToTop(this.currentStep.target);
    this.applyBounds(this.currentStep.target);
  }

  next(): void {
    this.currentStepIndex++;
    this.currentStep = this.steps[this.currentStepIndex];
    this.stepTrack.push(this.currentStep.target);
    this.scrollToTop(this.currentStep.target);
    this.applyBounds(this.currentStep.target);
    this.onNext.emit({ event: 'NEXT', targetTrack: this.stepTrack });
  }

  previous(): void {
    this.currentStepIndex--;
    this.currentStep = this.steps[this.currentStepIndex];
    this.stepTrack.push(this.currentStep.target);
    this.scrollToTop(this.currentStep.target);
    this.applyBounds(this.currentStep.target);
    this.onPrevious.emit({ event: 'PREVIOUS', targetTrack: this.stepTrack });
  }

  finish(): void {
    this.currentStep = null;
    this.onFinish.emit({ event: 'FINISH', targetTrack: this.stepTrack });
  }

  abort(): void {
    this.currentStep = null;
    this.onAbort.emit({ event: 'ABORT', targetTrack: this.stepTrack });
  }

  isCurrentStep(step: TourStep): boolean {
    return this.currentStep && step.target === this.currentStep.target;
  }

  isLastStep(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

  isFirstStep(): boolean {
    return this.currentStepIndex === 0;
  }
}
