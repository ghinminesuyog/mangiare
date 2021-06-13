import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceIntroComponent } from './place-intro.component';

describe('PlaceIntroComponent', () => {
  let component: PlaceIntroComponent;
  let fixture: ComponentFixture<PlaceIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
