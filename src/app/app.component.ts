import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgFeatureTourComponent, TourStep } from 'ng-feature-tour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('step')
  child: NgFeatureTourComponent;

  title = 'ng-feature-tour-app';

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
  }
}
