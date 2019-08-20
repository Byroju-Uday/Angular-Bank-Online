import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcustomerComponent } from './sidebarcustomer.component';

describe('SidebarcustomerComponent', () => {
  let component: SidebarcustomerComponent;
  let fixture: ComponentFixture<SidebarcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
