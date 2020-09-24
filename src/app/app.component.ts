import { Component, ViewChild } from '@angular/core';
import { NgFeatureTourComponent } from './ng-feature-tour/components/feature-tour/ng-feature-tour.component';

import { FeatureTourConfig } from './ng-feature-tour/models/feature-tour-config';
import { FeatureTourEvent } from './ng-feature-tour/models/feature-tour-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('tour')
  tour: NgFeatureTourComponent;

  title = 'ng-feature-tour-app';

  tourConfig: FeatureTourConfig = {
    a11y: {
      ariaLabel: 'tour de funcionalidades.',
      pagination: 'você está no passo {index} de {total}',
    },
    controls: {
      abort: 'ok, já entendi',
      previous: 'anterior',
      next: 'próximo',
      done: 'finalizar',
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
        target: 'feature-accessible',
        title: 'acessível',
        description: 'este componente é acessível',
        a11y: {
          ariaDescription: 'gráfico: acessível',
        },
      },
    ],
  };

  onClose(event: FeatureTourEvent): void {
    console.log(event.event, event.step.target);
  }

  startTour(): void {
    this.tour.start();
  }
}
