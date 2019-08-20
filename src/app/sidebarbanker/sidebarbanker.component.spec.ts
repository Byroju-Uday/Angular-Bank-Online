import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarbankerComponent } from './sidebarbanker.component';

describe('SidebarbankerComponent', () => {
  let component: SidebarbankerComponent;
  let fixture: ComponentFixture<SidebarbankerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarbankerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarbankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
