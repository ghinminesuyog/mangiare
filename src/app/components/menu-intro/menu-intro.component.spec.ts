import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIntroComponent } from './menu-intro.component';

describe('MenuIntroComponent', () => {
  let component: MenuIntroComponent;
  let fixture: ComponentFixture<MenuIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
