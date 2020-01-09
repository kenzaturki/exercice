import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModule1Component } from './component-module1.component';

describe('ComponentModule1Component', () => {
  let component: ComponentModule1Component;
  let fixture: ComponentFixture<ComponentModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
