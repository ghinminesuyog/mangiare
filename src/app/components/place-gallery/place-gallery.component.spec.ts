import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceGalleryComponent } from './place-gallery.component';

describe('PlaceGalleryComponent', () => {
  let component: PlaceGalleryComponent;
  let fixture: ComponentFixture<PlaceGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
