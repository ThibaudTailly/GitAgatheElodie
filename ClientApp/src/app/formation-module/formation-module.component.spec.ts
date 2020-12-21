import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationModuleComponent } from './formation-module.component';

describe('FormationModuleComponent', () => {
  let component: FormationModuleComponent;
  let fixture: ComponentFixture<FormationModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
