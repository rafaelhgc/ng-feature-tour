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
      target: 'feature-easy',
      title: 'fácil de usar',
      description: 'este componente é fácil de usar',
    },
    {
      target: 'feature-customizable',
      title: 'customizável',
      description: 'este componente é customizável',
    },
    {
      target: 'feature-accessible',
      title: 'acessível',
      description: 'este componente é acessível',
    },
  ];

  constructor(private featureTourService: FeatureTourService) {}

  ngOnInit(): void {
    this.featureTourService.onChange.subscribe((event: FeatureTourEvent) =>
      console.log(event)
    );
  }

  startTour(): void {
    this.featureTourService.initialize.emit('feature-easy');
  }
}
