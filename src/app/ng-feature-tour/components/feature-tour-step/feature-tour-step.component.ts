import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import {
  FeatureTourStepBounds,
  FeatureTourLensBounds,
} from '../../models/feature-tour-bounds';

import {
  FeatureTourEvent,
  FeatureTourEventEnum,
} from '../../models/feature-tour-event';

import { FeatureTourStep } from '../../models/feature-tour-step';

@Component({
  selector: 'feature-tour-step',
  templateUrl: './feature-tour-step.component.html',
  styleUrls: ['./feature-tour-step.component.scss'],
})
export class FeatureTourStepComponent implements AfterViewInit {
  @Input()
  step: FeatureTourStep;
  @Output()
  change: EventEmitter<FeatureTourEvent>;

  targetElement: HTMLElement;
  lensBounds: FeatureTourLensBounds;
  stepBounds: FeatureTourStepBounds;

  constructor(private ref: ChangeDetectorRef) {
    this.change = new EventEmitter<FeatureTourEvent>();
    this.stepBounds = { left: 0, top: 0, modifiers: '' };
    this.lensBounds = { width: 0, height: 0, left: 0, top: 0 };
  }

  ngAfterViewInit(): void {
    this.targetElement = document.getElementById(this.step.target);
    this.applyLensBounds();
    this.applyStepBounds();
    this.ref.detectChanges();
  }

  applyLensBounds(): void {
    const rect: DOMRect = this.targetElement.getBoundingClientRect();
    this.lensBounds = { ...rect.toJSON() };
  }

  private applyStepBounds(): void {
    const margin = 32;
    const stepElement = document.getElementById(this.step.id);
    const stepRect = stepElement.getBoundingClientRect();
    const targetRect = this.targetElement.getBoundingClientRect();

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

    this.stepBounds = { left, top, modifiers: modifiers.join(' ') };
  }

  previous(): void {
    this.change.emit({ step: this.step, event: FeatureTourEventEnum.Previous });
  }

  next(): void {
    this.change.emit({ step: this.step, event: FeatureTourEventEnum.Next });
  }

  done(): void {
    this.change.emit({ step: this.step, event: FeatureTourEventEnum.Done });
  }

  abort(): void {
    this.change.emit({ step: this.step, event: FeatureTourEventEnum.Done });
  }

  @HostListener('document:keydown.escape', [])
  escape() {
    this.change.emit({ step: this.step, event: FeatureTourEventEnum.Escape });
  }
}
