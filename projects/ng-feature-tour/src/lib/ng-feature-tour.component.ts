import {
  Component,
  Renderer2,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  TourStep,
  TourEvent,
  EventEnum,
  StepBounds,
  LensBounds,
} from './ng-feature-tour.model';

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

  stepTrack: string[];

  constructor(private renderer: Renderer2) {
    this.onNext = new EventEmitter<TourEvent>();
    this.onPrevious = new EventEmitter<TourEvent>();
    this.onAbort = new EventEmitter<TourEvent>();
    this.onFinish = new EventEmitter<TourEvent>();
    this.onChange = new EventEmitter<TourEvent>();
    this.stepTrack = [];
  }

  private scrollToTop({ target }: TourStep): void {
    window.scrollTo(0, document.getElementById(target).offsetTop - 16);
  }

  private getStepByTarget(target: string): TourStep {
    return this.steps.filter((step) => step.target === target).pop();
  }

  private getIndexFromStep(search?: TourStep): number {
    const step = search || this.currentStep;

    if (!step) {
      return -1;
    }

    return this.steps.map(({ target }) => target).indexOf(step.target);
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

  private getStepBounds(targetRect: DOMRect): StepBounds {
    const { availHeight, availWidth } = screen;
    const margin = 32;
    const maxWidth = availHeight / 2;
    const stepRect = this.stepRef.nativeElement.getBoundingClientRect();

    let y: number;
    let x: number;
    let yPosition: 'to-bottom' | 'to-top';
    let xPosition: 'to-left' | 'to-right';

    // axis y
    if (targetRect.y > availHeight - (targetRect.y + targetRect.height)) {
      yPosition = 'to-top';
      y = targetRect.y - stepRect.height - margin;
    } else {
      yPosition = 'to-bottom';
      y = targetRect.y + targetRect.height + margin;
    }

    // axis x
    if (targetRect.x > availWidth / 2) {
      xPosition = 'to-right';
      x = targetRect.x + targetRect.width - stepRect.width;
    } else {
      xPosition = 'to-left';
      x = targetRect.x;
    }

    return { yPosition, xPosition, y, x, maxWidth };
  }

  private applyStepBounds(rect: DOMRect): void {
    const { x, y, maxWidth, yPosition, xPosition } = this.getStepBounds(rect);
    const step = this.stepRef.nativeElement;

    this.renderer.setStyle(step, 'transform', `translate(${x}px, ${y}px)`);
    this.renderer.setStyle(step, 'max-width', `${maxWidth}px`);
    this.renderer.removeClass(step, 'to-top');
    this.renderer.removeClass(step, 'to-left');
    this.renderer.removeClass(step, 'to-right');
    this.renderer.removeClass(step, 'to-bottom');
    this.renderer.addClass(step, yPosition);
    this.renderer.addClass(step, xPosition);
  }

  private getLensBounds({ y, x, width, height }: DOMRect): LensBounds {
    return { y, x, width, height };
  }

  private applyLensBounds(rect: DOMRect): void {
    const { x, y, width, height } = this.getLensBounds(rect);
    const lens = this.lensRef.nativeElement;

    this.renderer.setStyle(lens, 'transform', `translate(${x}px, ${y}px)`);
    this.renderer.setStyle(lens, 'width', `${width}px`);
    this.renderer.setStyle(lens, 'height', `${height}px`);
  }

  private applyBounds({ target }: TourStep): void {
    const targetRect = document.getElementById(target).getBoundingClientRect();

    this.applyStepBounds(targetRect);
    this.applyLensBounds(targetRect);
  }

  private setFocus(): void {
    this.scrollToTop(this.currentStep);

    setTimeout(() => {
      this.applyBounds(this.currentStep);
    }, 0);
  }

  private changeStep(event: EventEnum, step?: TourStep): void {
    this.currentStep = step;
    this.stepTrack.push(step.target);
    this.emitChangeEvent(this.currentStep.target, event);
    this.setFocus();
  }

  start() {
    let initialStep: TourStep;

    if (this.initialStepTarget) {
      initialStep = this.getStepByTarget(this.initialStepTarget);
    } else {
      initialStep = this.steps[0];
    }

    this.changeStep(EventEnum.Start, initialStep);
  }

  next(): void {
    const stepIndex = this.getIndexFromStep();
    const nextStep = this.steps[stepIndex + 1];

    this.changeStep(EventEnum.Next, nextStep);
  }

  previous(): void {
    const stepIndex = this.getIndexFromStep();
    const previousStep = this.steps[stepIndex - 1];

    this.changeStep(EventEnum.Previous, previousStep);
  }

  finish(): void {
    this.emitChangeEvent(this.currentStep.target, EventEnum.Finish);
    this.currentStep = null;
    this.stepTrack = [];
  }

  abort(): void {
    this.emitChangeEvent(this.currentStep.target, EventEnum.Abort);
    this.currentStep = null;
    this.stepTrack = [];
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
