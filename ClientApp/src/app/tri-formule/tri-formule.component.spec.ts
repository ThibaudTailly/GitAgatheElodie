import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriFormuleComponent } from './tri-formule.component';

describe('TriFormuleComponent', () => {
  let component: TriFormuleComponent;
  let fixture: ComponentFixture<TriFormuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriFormuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriFormuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
