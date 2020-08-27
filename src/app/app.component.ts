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
    {
      target: 'event',
      title: 'Step Tracking',
      description:
        "Follow step by step with EventEmitter and see the user's journey through the tour",
    },
  ];

  start(): void {
    this.events = [];
    this.child.start();
  }

  onChange(event: TourStep): void {
    this.events.push({ ...event });
  }
}
