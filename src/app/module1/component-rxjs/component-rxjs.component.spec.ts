import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRxjsComponent } from './component-rxjs.component';

describe('ComponentRxjsComponent', () => {
  let component: ComponentRxjsComponent;
  let fixture: ComponentFixture<ComponentRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
