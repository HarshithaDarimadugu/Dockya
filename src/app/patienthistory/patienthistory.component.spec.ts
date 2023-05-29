import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienthistoryComponent } from './patienthistory.component';

describe('PatienthistoryComponent', () => {
  let component: PatienthistoryComponent;
  let fixture: ComponentFixture<PatienthistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatienthistoryComponent]
    });
    fixture = TestBed.createComponent(PatienthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
