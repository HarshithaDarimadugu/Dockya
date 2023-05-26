import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiendbComponent } from './patiendb.component';

describe('PatiendbComponent', () => {
  let component: PatiendbComponent;
  let fixture: ComponentFixture<PatiendbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatiendbComponent]
    });
    fixture = TestBed.createComponent(PatiendbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
