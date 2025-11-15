import { Component } from '@angular/core';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-acadmic-journy',
  imports: [],
  templateUrl: './acadmic-journy.component.html',
  styleUrl: './acadmic-journy.component.scss'
})
export class AcadmicJournyComponent {

  constructor(private common: CommonService) { }
  ngoinit(): void {

  }


  saveNext(data:string) {
    this.common._isNextPage.next(data);
  }

}
