import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatientpfComponent } from './editpatientpf.component';

describe('EditpatientpfComponent', () => {
  let component: EditpatientpfComponent;
  let fixture: ComponentFixture<EditpatientpfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditpatientpfComponent]
    });
    fixture = TestBed.createComponent(EditpatientpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
