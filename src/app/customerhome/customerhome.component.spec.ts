import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerhomeComponent } from './customerhome.component';

describe('CustomerhomeComponent', () => {
  let component: CustomerhomeComponent;
  let fixture: ComponentFixture<CustomerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
