import {
  Component,
  Renderer2,
  Input,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';

import { NgTourLensBounds } from './models/ng-feature-tour-lens-bounds.model';
import { NgTourStepBounds } from './models/ng-feature-tour-step-bounds.model';
import { NgTourStep } from './models/ng-feature-tour-step.model';
import { NgTourEventEnum } from './models/ng-feature-tour-event.model';
import { NgTourEventService } from './services/ng-feature-tour-event.service';

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

  constructor(
    private ngTourEventService: NgTourEventService,
    private renderer: Renderer2
  ) {}

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

  private getStepBounds(targetRect: DOMRect): NgTourStepBounds {
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

  private getLensBounds({ y, x, width, height }: DOMRect): NgTourLensBounds {
    return { y, x, width, height };
  }

  private applyLensBounds(rect: DOMRect): void {
    const { x, y, width, height } = this.getLensBounds(rect);
    const lens = this.lensRef.nativeElement;

    this.renderer.setStyle(lens, 'transform', `translate(${x}px, ${y}px)`);
    this.renderer.setStyle(lens, 'width', `${width}px`);
    this.renderer.setStyle(lens, 'height', `${height}px`);
  }

  private applyBounds({ target }: NgTourStep): void {
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
