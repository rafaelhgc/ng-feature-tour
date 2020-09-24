import { Component, OnInit } from '@angular/core';

import { FeatureTourConfig } from './ng-feature-tour/models/feature-tour-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-feature-tour-app';

  tour: FeatureTourConfig = {
    firstTarget: 'feature-easy',
    a11y: {
      ariaLabel: 'tour de funcionalidades.',
      pagination: 'você está no passo {{index}} de {{total}}',
    },
    steps: [
      {
        target: 'feature-easy',
        title: 'fácil de usar',
        description: 'este componente é fácil de usar',
        a11y: {
          ariaDescription: 'gráfico: fácil de usar',
        },
      },
      {
        target: 'feature-customizable',
        title: 'customizável',
        description: 'este componente é customizável',
        a11y: {
          ariaDescription: 'gráfico: customizável',
        },
      },
      {
        target: 'feature-easy',
        title: 'acessível',
        description: 'este componente é acessível',
        a11y: {
          ariaDescription: 'gráfico: acessível',
        },
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}

  startTour(): void {
    console.log('...');
  }
}
