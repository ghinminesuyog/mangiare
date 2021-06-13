import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-place-intro',
  templateUrl: './place-intro.component.html',
  styleUrls: ['./place-intro.component.scss']
})
export class PlaceIntroComponent implements OnInit {

  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    this._animateService.animateElements(['title', 'subtitle'], 'rollTextUpClass','place-intro-section');

    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['title', 'subtitle'], 'rollTextUpClass','place-intro-section');
    });

  }
}
