import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-menu-intro',
  templateUrl: './menu-intro.component.html',
  styleUrls: ['./menu-intro.component.scss']
})
export class MenuIntroComponent implements OnInit {

  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    this._animateService.animateElements(['title', 'subtitle'], 'rollTextUpClass','menu-intro-section');

    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['title', 'subtitle'], 'rollTextUpClass','menu-intro-section');
    });

  }

}
