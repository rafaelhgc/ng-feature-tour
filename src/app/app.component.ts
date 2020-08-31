import { Component, OnInit } from '@angular/core';
import { NgTourStep, NgTourEventService, NgTourEvent } from 'ng-feature-tour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-feature-tour-app';

  steps: NgTourStep[] = [
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

  constructor(private ngFeatureTourService: NgTourEventService) {}

  ngOnInit(): void {
    this.ngFeatureTourService.onChange.subscribe((event: NgTourEvent) =>
      console.log(event)
    );
  }

  start(): void {
    this.ngFeatureTourService.initialize.emit();
  }
}
