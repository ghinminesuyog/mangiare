import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-team-gallery',
  templateUrl: './team-gallery.component.html',
  styleUrls: ['./team-gallery.component.scss']
})
export class TeamGalleryComponent implements OnInit {
  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    this._animateService.animateElements(['photo-container'], 'rollImageRightClass','team-gallery-section');

    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['photo-container'], 'rollImageRightClass','team-gallery-section');
    });

  }

}
