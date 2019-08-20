import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneytransferComponent } from './moneytransfer.component';

describe('MoneytransferComponent', () => {
  let component: MoneytransferComponent;
  let fixture: ComponentFixture<MoneytransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneytransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneytransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
