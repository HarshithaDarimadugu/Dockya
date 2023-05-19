import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpfComponent } from './adminpf.component';

describe('AdminpfComponent', () => {
  let component: AdminpfComponent;
  let fixture: ComponentFixture<AdminpfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpfComponent]
    });
    fixture = TestBed.createComponent(AdminpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
