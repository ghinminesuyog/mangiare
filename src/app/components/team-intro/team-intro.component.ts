import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-team-intro',
  templateUrl: './team-intro.component.html',
  styleUrls: ['./team-intro.component.scss']
})
export class TeamIntroComponent implements OnInit {

  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    this._animateService.animateElements(['title', 'subtitle'], 'rollTextUpClass','team-intro-section');

    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['title', 'subtitle'], 'rollTextUpClass','team-intro-section');
    });

  }
}
