import { Component } from '@angular/core';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  constructor(private common: CommonService) { }
  ngoinit(): void {

  }


  saveNext(data:any) {
    this.common._isNextPage.next(data);
  }

}
