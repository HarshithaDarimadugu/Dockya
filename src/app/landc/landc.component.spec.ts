import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandcComponent } from './landc.component';

describe('LandcComponent', () => {
  let component: LandcComponent;
  let fixture: ComponentFixture<LandcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandcComponent]
    });
    fixture = TestBed.createComponent(LandcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
