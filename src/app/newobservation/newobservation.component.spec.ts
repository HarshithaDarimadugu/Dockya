import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewobservationComponent } from './newobservation.component';

describe('NewobservationComponent', () => {
  let component: NewobservationComponent;
  let fixture: ComponentFixture<NewobservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewobservationComponent]
    });
    fixture = TestBed.createComponent(NewobservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
