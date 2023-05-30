import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelappointComponent } from './cancelappoint.component';

describe('CancelappointComponent', () => {
  let component: CancelappointComponent;
  let fixture: ComponentFixture<CancelappointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelappointComponent]
    });
    fixture = TestBed.createComponent(CancelappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
