import { Component } from '@angular/core';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {


  constructor(private common: CommonService) { }
  ngoinit(): void {

  }


  saveNext() {
    this.common._isNextPage.next(3);
  }

}
