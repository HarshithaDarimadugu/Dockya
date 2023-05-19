import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Token2Component } from './token2.component';

describe('Token2Component', () => {
  let component: Token2Component;
  let fixture: ComponentFixture<Token2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Token2Component]
    });
    fixture = TestBed.createComponent(Token2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
