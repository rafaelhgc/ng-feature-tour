import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFeatureTourComponent } from './ng-feature-tour.component';

describe('NgFeatureTourComponent', () => {
  let component: NgFeatureTourComponent;
  let fixture: ComponentFixture<NgFeatureTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgFeatureTourComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFeatureTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
