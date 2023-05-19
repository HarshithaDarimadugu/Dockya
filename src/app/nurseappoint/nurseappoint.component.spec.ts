import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseappointComponent } from './nurseappoint.component';

describe('NurseappointComponent', () => {
  let component: NurseappointComponent;
  let fixture: ComponentFixture<NurseappointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseappointComponent]
    });
    fixture = TestBed.createComponent(NurseappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
