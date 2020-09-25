import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
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
})
export class FeatureTourStepComponent implements AfterViewInit {
  @ViewChild('bullets')
  bullets: ElementRef;

  @Input()
  step: FeatureTourStep;

  @Output()
  change: EventEmitter<FeatureTourEvent>;

  lensBounds: FeatureTourLensBounds;

  stepBounds: FeatureTourStepBounds;

  constructor(private ref: ChangeDetectorRef, private renderer: Renderer2) {
    this.change = new EventEmitter<FeatureTourEvent>();
    this.stepBounds = { left: 0, top: 0, modifiers: '' };
    this.lensBounds = { width: 0, height: 0, left: 0, top: 0 };
  }

  ngAfterViewInit(): void {
    this.buildStepBullets();
    this.drawStep();
  }

  drawStep(): void {
    this.scrollElementToTop();
    this.applyLensBounds();
    this.applyStepBounds();
    this.ref.detectChanges();
    this.captureFocus();
  }

  buildStepBullets() {
    for (let i = 0; i < this.step.total; i++) {
      const bullet = document.createElement('span');

      if (i === this.step.index) {
        bullet.classList.add('is-current');
      }

      bullet.classList.add('ft-step-bullet');

      this.renderer.appendChild(this.bullets.nativeElement, bullet);
    }
  }

  captureFocus(): void {
    const header = document.getElementById(this.step.id).querySelector('h2');
    header.focus();
  }

  scrollElementToTop(): void {
    const stepElement = document.getElementById(this.step.target);
    window.scrollTo(0, stepElement.offsetTop - 16);
  }

  applyLensBounds(): void {
    const targetElement = document.getElementById(this.step.target);
    const { width, height, left, top } = targetElement.getBoundingClientRect();

    this.lensBounds = { width, height, left, top };
  }

  isTargetToTop({ top, height }): boolean {
    return top > screen.availHeight - (top + height);
  }

  isTargetToLeft({ left }): boolean {
    return left > screen.availWidth / 2;
  }

  applyStepBounds(): void {
    const margin = 32;
    const stepElement = document.getElementById(this.step.id);
    const targetElement = document.getElementById(this.step.target);
    const targetRect = targetElement.getBoundingClientRect();
    const stepRect = stepElement.getBoundingClientRect();
    let left: number = 0;
    let top: number = 0;
    let modifiers: string[] = [];

    // axis y
    if (this.isTargetToTop(targetRect)) {
      modifiers.push('to-top');
      top = targetRect.top - stepRect.height - margin;
    } else {
      modifiers.push('to-bottom');
      top = targetRect.top + targetRect.height + margin;
    }

    // axis x
    if (this.isTargetToLeft(targetRect)) {
      modifiers.push('to-right');
      left = targetRect.left + targetRect.width - stepRect.width;
    } else {
      modifiers.push('to-left');
      left = targetRect.left;
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
    this.change.emit({ step: this.step, event: FeatureTourEventEnum.Abort });
  }

  @HostListener('document:keydown.escape', [])
  onScape() {
    this.change.emit({ step: this.step, event: FeatureTourEventEnum.Escape });
  }

  @HostListener('window:resize', [])
  onResize() {
    this.drawStep();
  }
}
