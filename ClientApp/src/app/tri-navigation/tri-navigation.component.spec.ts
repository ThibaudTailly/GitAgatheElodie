import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriNavigationComponent } from './tri-navigation.component';

describe('TriNavigationComponent', () => {
  let component: TriNavigationComponent;
  let fixture: ComponentFixture<TriNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
