import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { TourStep, StepBounds } from './ng-feature-tour.model';

@Component({
  selector: 'ng-feature-tour',
  templateUrl: './ng-feature-tour.component.html',
  styleUrls: ['./ng-feature-tour.component.scss'],
})
export class NgFeatureTourComponent implements OnInit {
  @Input()
  steps: TourStep[];

  @Input()
  currentStep: number = 0;

  @ViewChild('step')
  stepRef: ElementRef;

  @ViewChild('stepScope')
  stepScopeRef: ElementRef;

  active: boolean;

  constructor(private renderer: Renderer2) {}

  private applyStepBounds(): void {
    const { x, y, scope } = this.getStepBounds();
    const stepElement = this.stepRef.nativeElement;
    const scopeElement = this.stepScopeRef.nativeElement;

    this.renderer.setStyle(stepElement, 'left', `${x}px`);
    this.renderer.setStyle(stepElement, 'top', `${y}px`);
    this.renderer.setStyle(scopeElement, 'width', `${scope.width}px`);
    this.renderer.setStyle(scopeElement, 'height', `${scope.height}px`);
    this.renderer.setStyle(scopeElement, 'left', `${scope.x}px`);
    this.renderer.setStyle(scopeElement, 'top', `${scope.y}px`);
  }

  private getStepBounds(): StepBounds {
    const currentStep = this.getCurrentStep();
    const el = document.getElementById(currentStep.target) as HTMLElement;
    const targetBounds = el.getBoundingClientRect();
    const arrowMargin = 32;

    return {
      x: targetBounds.left,
      y: targetBounds.bottom + arrowMargin,
      scope: {
        width: targetBounds.width,
        height: targetBounds.height,
        x: targetBounds.left,
        y: targetBounds.top,
      },
    };
  }

  ngOnInit(): void {}

  start(): void {
    this.active = true;
    this.applyStepBounds();
  }

  next(): void {
    this.currentStep++;
    this.applyStepBounds();
  }

  previous(): void {
    this.currentStep--;
    this.applyStepBounds();
  }

  getCurrentStep(): TourStep {
    return this.steps[this.currentStep];
  }
}
