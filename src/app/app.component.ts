import { Component, OnInit } from '@angular/core';
import { NgTourEventService, NgTourEvent, NgTourConfig } from 'ng-feature-tour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-feature-tour-app';

  tourConfig: NgTourConfig = {
    controls: {
      abort: {
        label: 'ok, já entendi',
      },
      previous: {
        label: 'anterior',
      },
      next: {
        label: 'próximo',
      },
      done: {
        label: 'encerrar',
      },
    },
    steps: [
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
    ],
    lastTarget: 'featureAccessible'
  };

  constructor(private ngFeatureTourService: NgTourEventService) {}

  ngOnInit(): void {
    this.ngFeatureTourService.onChange.subscribe((event: NgTourEvent) =>
      console.log(event)
    );
  }

  start(): void {
    this.ngFeatureTourService.initialize.emit(this.tourConfig);
  }
}
