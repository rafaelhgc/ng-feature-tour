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
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum consectetur dolores incidunt sed! Blanditiis consequuntur beatae laboriosam magni facilis cum minus quas? Nisi asperiores ratione quaerat, molestiae harum velit.',
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
