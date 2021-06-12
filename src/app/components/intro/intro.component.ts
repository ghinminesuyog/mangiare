import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    this._animateService.animateElements(['title', 'subtitle'], 'rollTextUpClass','intro-section');

    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['title', 'subtitle'], 'rollTextUpClass','intro-section');
    });

  }


}
