import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FeatureTourConfig } from '../../models/feature-tour-config';
import { FeatureTourStep } from '../../models/feature-tour-step';
import {
  FeatureTourEvent,
  FeatureTourEventEnum,
} from '../../models/feature-tour-event';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
})
export class NgFeatureTourComponent implements OnInit {
  @Input()
  tour: FeatureTourConfig;

  @Output()
  close: EventEmitter<FeatureTourEvent>;

  @Output()
  previous: EventEmitter<FeatureTourEvent>;

  @Output()
  next: EventEmitter<FeatureTourEvent>;

  steps: FeatureTourStep[];

  constructor() {
    this.close = new EventEmitter<FeatureTourEvent>();
    this.previous = new EventEmitter<FeatureTourEvent>();
    this.next = new EventEmitter<FeatureTourEvent>();
  }

  ngOnInit(): void {
    this.steps = this.tour.steps.map((step, i) => ({
      id: `feature-tour-step-${step.target}`,
      target: step.target,
      index: i,
      total: this.tour.steps.length,
      title: step.title,
      description: step.description,
      enabled: false,
      a11y: {
        ariaDescription: step.a11y.ariaDescription,
        ariaLabel: this.tour.a11y.ariaLabel,
        pagination: this.tour.a11y.pagination,
      },
      controls: {
        abort: {
          label: this.tour.controls.abort,
          enabled: true,
        },
        previous: {
          label: this.tour.controls.previous,
          enabled: i > 0,
        },
        next: {
          label: this.tour.controls.next,
          enabled: i !== this.tour.steps.length - 1,
        },
        done: {
          label: this.tour.controls.done,
          enabled: i === this.tour.steps.length - 1,
        },
      },
    }));
  }

  start(target?: string): void {
    const step = this.steps.filter((step) => step.target === target).shift();

    if (step) {
      this.enableStep(step);
    } else {
      this.enableStep(this.steps[0]);
    }
  }

  private enableStep(step: FeatureTourStep): void {
    step.enabled = true;
  }

  onChange(change: FeatureTourEvent) {
    switch (change.event) {
      case FeatureTourEventEnum.Abort:
      case FeatureTourEventEnum.Done:
      case FeatureTourEventEnum.Escape:
        this.onClose(change);
        break;
      case FeatureTourEventEnum.Next:
        this.onNext(change);
        break;
      case FeatureTourEventEnum.Previous:
        this.onPrevious(change);
        break;
    }
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  onClose(event: FeatureTourEvent): void {
    event.step.enabled = false;
    this.scrollToTop();
    this.close.emit(event);
  }

  onPrevious(event: FeatureTourEvent): void {
    const nextStep = this.steps[event.step.index - 1];

    event.step.enabled = false;
    nextStep.enabled = true;

    this.previous.emit(event);
  }

  onNext(event: FeatureTourEvent): void {
    const nextStep = this.steps[event.step.index + 1];

    event.step.enabled = false;
    nextStep.enabled = true;

    this.next.emit(event);
  }
}
