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
    return this.steps.map(({ target }) => target).indexOf(target);
  }

  private emitChangeEvent(target: string, event: EventEnum): void {
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
    const bounds = document.getElementById(target).getBoundingClientRect();
    const step = this.stepRef.nativeElement;
    const lens = this.lensRef.nativeElement;

    this.renderer.setStyle(step, 'top', `${bounds.bottom + 32}px`);
    this.renderer.setStyle(step, 'left', `${bounds.left}px`);
    this.renderer.setStyle(lens, 'top', `${bounds.top}px`);
    this.renderer.setStyle(lens, 'left', `${bounds.left}px`);
    this.renderer.setStyle(lens, 'width', `${bounds.width}px`);
    this.renderer.setStyle(lens, 'height', `${bounds.height}px`);
  }

  private setFocus(): void {
    this.scrollToTop(this.currentStep.target);
    this.applyBounds(this.currentStep.target);
  }

  private changeStep(event: EventEnum): void {
    this.currentStep = this.steps[this.currentStepIndex];
    this.stepTrack.push(this.currentStep.target);
    this.setFocus();
    this.emitChangeEvent(this.currentStep.target, event);
  }

  start() {
    this.stepTrack = [];
    this.initialStepTarget = this.initialStepTarget || this.steps[0].target;
    this.currentStepIndex = this.getIndexFromTarget(this.initialStepTarget);
    this.changeStep(EventEnum.Start);
  }

  next(): void {
    this.currentStepIndex++;
    this.changeStep(EventEnum.Next);
  }

  previous(): void {
    this.currentStepIndex--;
    this.changeStep(EventEnum.Previous);
  }

  finish(): void {
    this.emitChangeEvent(this.currentStep.target, EventEnum.Finish);
    this.currentStep = null;
  }

  abort(): void {
    this.emitChangeEvent(this.currentStep.target, EventEnum.Abort);
    this.currentStep = null;
  }

  isLastStep(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

  isFirstStep(): boolean {
    return this.currentStepIndex === 0;
  }
}
