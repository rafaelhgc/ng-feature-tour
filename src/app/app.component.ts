import { Component, OnInit } from '@angular/core';
import { FeatureTourService, Event, Setup } from 'ng-feature-tour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-feature-tour-app';

  setup: Setup = {
    a11ty: {
      roleDescription: 'Você está no passo {index} de {total}.',
    },
    initialStep: 'feature-easy',
    controls: {
      abort: 'ok, já entendi',
      previous: 'anterior',
      next: 'próximo',
      done: 'finalizar',
    },
  };

  steps = [
    {
      target: 'feature-easy',
      title: 'fácil de usar',
      description: 'este componente é fácil de usar',
    },
    {
      target: 'feature-customizable',
      title: 'customizável',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet mollis diam imperdiet vulputate. Sed sollicitudin, erat et ornare imperdiet, orci elit ullamcorper nibh, ac pulvinar erat velit quis diam.',
    },
    {
      target: 'feature-accessible',
      title: 'acessível',
      description: 'este componente é acessível',
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
