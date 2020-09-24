import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTourStepComponent } from './feature-tour-step.component';

describe('FeatureTourStepComponent', () => {
  let component: FeatureTourStepComponent;
  let fixture: ComponentFixture<FeatureTourStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTourStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTourStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
