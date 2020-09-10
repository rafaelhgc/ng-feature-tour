import { Component, OnInit } from '@angular/core';
import { FeatureTourService, FeatureTourEvent } from 'ng-feature-tour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-feature-tour-app';
  steps = [
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

  constructor(private featureTourService: FeatureTourService) {}

  ngOnInit(): void {
    this.featureTourService.onChange.subscribe((event: FeatureTourEvent) =>
      console.log(event)
    );
  }

  start(): void {
    this.featureTourService.initialize.emit('featureEasy');
  }
}
