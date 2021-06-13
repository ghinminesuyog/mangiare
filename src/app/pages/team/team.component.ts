import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    this._animateService.animateElements(['separator',], 'separatorClass', 'team-page');

    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['separator',], 'separatorClass', 'team-page');
    });
  }

}
