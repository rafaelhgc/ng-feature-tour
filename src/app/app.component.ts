import { Component, ViewChild } from '@angular/core';
import { NgFeatureTourComponent, TourStep } from 'ng-feature-tour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('step')
  child: NgFeatureTourComponent;

  title = 'ng-feature-tour-app';

  events: any = [];

  steps: TourStep[] = [
    {
      target: 'featureEasy',
      title: 'Easy',
      description: 'this is easy',
    },
    {
      target: 'featureCustomizable',
      title: 'Customizable',
      description: 'this is customizable',
    },
    {
      target: 'featureAccessible',
      title: 'Accessible',
      description: 'this is accessible',
    },
  ];

  start(): void {
    this.child.start();
    this.events = [];
  }

  handleNext(step: TourStep): void {
    this.events.push({ event: 'NEXT', step });
  }

  handlePrevious(step: TourStep): void {
    this.events.push({ event: 'PREVIOUS', step });
  }

  handleAbort(step: TourStep): void {
    this.events.push({ event: 'ABORT', step });
  }

  handleFinish(step: TourStep): void {
    this.events.push({ event: 'FINISH', step });
  }
}
