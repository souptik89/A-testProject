import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FValidComponent } from './f-valid.component';

describe('FValidComponent', () => {
  let component: FValidComponent;
  let fixture: ComponentFixture<FValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
