import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrezMinComponent } from './prez-min.component';

describe('PrezMinComponent', () => {
  let component: PrezMinComponent;
  let fixture: ComponentFixture<PrezMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrezMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrezMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
