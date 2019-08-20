import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerloginComponent } from './bankerlogin.component';

describe('BankerloginComponent', () => {
  let component: BankerloginComponent;
  let fixture: ComponentFixture<BankerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
