import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['title', 'subtitle'], 'rollTextUpClass','about-section');
      this._animateService.animateElements(['image-container',], 'rollImageRightClass','about-section');
    });
  }
}