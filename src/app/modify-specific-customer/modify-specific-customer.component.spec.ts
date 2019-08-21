import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySpecificCustomerComponent } from './modify-specific-customer.component';

describe('ModifySpecificCustomerComponent', () => {
  let component: ModifySpecificCustomerComponent;
  let fixture: ComponentFixture<ModifySpecificCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifySpecificCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySpecificCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
