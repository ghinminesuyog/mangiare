import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-place-gallery',
  templateUrl: './place-gallery.component.html',
  styleUrls: ['./place-gallery.component.scss']
})
export class PlaceGalleryComponent implements OnInit {

  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    this._animateService.animateElements(['photo-container'], 'rollImageRightClass','place-gallery-section');

    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['photo-container'], 'rollImageRightClass','place-gallery-section');
    });

  }
}
