import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprescriptionComponent } from './editprescription.component';

describe('EditprescriptionComponent', () => {
  let component: EditprescriptionComponent;
  let fixture: ComponentFixture<EditprescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprescriptionComponent]
    });
    fixture = TestBed.createComponent(EditprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
