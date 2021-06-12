import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animate.service';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})
export class SpecialityComponent implements OnInit {

  constructor(
    private _animateService: AnimationService
  ) { }

  ngOnInit() {
    this._animateService.animateElements(['image-container'], 'rollImageRightClass','speciality-section');

    document.addEventListener('scroll', () => {
      this._animateService.animateElements(['image-container'], 'rollImageRightClass','speciality-section');
    });
  }

}
