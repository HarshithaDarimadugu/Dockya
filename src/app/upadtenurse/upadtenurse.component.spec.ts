import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadtenurseComponent } from './upadtenurse.component';

describe('UpadtenurseComponent', () => {
  let component: UpadtenurseComponent;
  let fixture: ComponentFixture<UpadtenurseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpadtenurseComponent]
    });
    fixture = TestBed.createComponent(UpadtenurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
