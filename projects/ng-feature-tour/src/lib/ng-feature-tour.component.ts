import {
  Component,
  Renderer2,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { TourStep, TourEvent, EventEnum } from './ng-feature-tour.model';

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
  onChange: EventEmitter<TourEvent>;

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
    this.onChange = new EventEmitter<TourEvent>();
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

  emitChageEvent(target: string, event: EventEnum): void {
    const tourEvent: TourEvent = {
      event: event,
      currentStep: target,
      stepTrack: [...this.stepTrack],
    };

    switch (event) {
      case EventEnum.Next:
        this.onNext.emit(tourEvent);
        break;
      case EventEnum.Previous:
        this.onPrevious.emit(tourEvent);
        break;
      case EventEnum.Finish:
        this.onFinish.emit(tourEvent);
        break;
      case EventEnum.Abort:
        this.onAbort.emit(tourEvent);
        break;
    }

    this.onChange.emit(tourEvent);
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
    this.emitChageEvent(this.currentStep.target, EventEnum.Next);
  }

  previous(): void {
    this.currentStepIndex--;
    this.currentStep = this.steps[this.currentStepIndex];
    this.stepTrack.push(this.currentStep.target);
    this.scrollToTop(this.currentStep.target);
    this.applyBounds(this.currentStep.target);
    this.emitChageEvent(this.currentStep.target, EventEnum.Previous);
  }

  finish(): void {
    this.emitChageEvent(this.currentStep.target, EventEnum.Finish);
    this.currentStep = null;
  }

  abort(): void {
    this.emitChageEvent(this.currentStep.target, EventEnum.Abort);
    this.currentStep = null;
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
