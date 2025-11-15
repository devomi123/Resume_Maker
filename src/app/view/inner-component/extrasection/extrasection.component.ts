import { Component } from '@angular/core';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-extrasection',
  imports: [],
  templateUrl: './extrasection.component.html',
  styleUrl: './extrasection.component.scss'
})
export class ExtrasectionComponent {

  constructor(private common: CommonService) { }
  ngoinit(): void {

  }


  saveNext(data:any) {
    this.common._isNextPage.next(data);
  }

}
