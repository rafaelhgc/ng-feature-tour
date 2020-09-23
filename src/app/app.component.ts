import { Component, OnInit } from '@angular/core';
import {
  Event,
  Setup,
  Step,
} from './modules/ng-feature-tour/ng-feature-tour.model';
import { FeatureTourService } from './modules/ng-feature-tour/ng-feature-tour.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-feature-tour-app';

  setup: Setup = {
    a11y: {
      pagination: 'Você está no passo {index} de {total}.',
    },
    initialStep: 'feature-easy',
    controls: {
      abort: 'ok, já entendi',
      previous: 'anterior',
      next: 'próximo',
      done: 'finalizar',
    },
  };

  steps: Step[] = [
    {
      target: 'feature-easy',
      title: 'fácil de usar',
      description: 'este componente é fácil de usar',
      a11y: {
        label: 'tour de funcionalidades.',
        description: 'gráfico: fácil de usar',
      },
    },
    {
      target: 'feature-customizable',
      title: 'customizável',
      description: 'este componente é customizável',
      a11y: {
        label: 'tour de funcionalidades.',
        description: 'gráfico: customizável',
      },
    },
    {
      target: 'feature-accessible',
      title: 'acessível',
      description: 'este componente é acessível',
      a11y: {
        label: 'tour de funcionalidades.',
        description: 'gráfico: acessível',
      },
    },
  ];

  constructor(private featureTourService: FeatureTourService) {}

  ngOnInit(): void {
    this.featureTourService.onChange.subscribe((event: Event) =>
      console.log(event)
    );
  }

  startTour(): void {
    this.featureTourService.initialize.emit(this.setup);
  }
}
