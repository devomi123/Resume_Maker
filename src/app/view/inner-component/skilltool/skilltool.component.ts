import { Component } from '@angular/core';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-skilltool',
  imports: [],
  templateUrl: './skilltool.component.html',
  styleUrl: './skilltool.component.scss'
})
export class SkilltoolComponent {
  constructor(private common: CommonService) { }
  ngoinit(): void {

  }


  saveNext(data:any) {
    alert(data)
    this.common._isNextPage.next(data);
  }

}
