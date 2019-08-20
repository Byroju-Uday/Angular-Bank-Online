import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerhomeComponent } from './bankerhome.component';

describe('BankerhomeComponent', () => {
  let component: BankerhomeComponent;
  let fixture: ComponentFixture<BankerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
