import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    this._animateService.animateElements(['separator',], 'separatorClass', 'place-page');

    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['separator',], 'separatorClass', 'place-page');
    });
  }

}
