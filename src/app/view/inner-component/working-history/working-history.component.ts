import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../core/services/common.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-working-history',
  imports: [],
  templateUrl: './working-history.component.html',
  styleUrl: './working-history.component.scss'
})
export class WorkingHistoryComponent implements OnInit {
constructor(private common:CommonService ,private http:HttpClient){}
_isAddExp : boolean = false;
ngOnInit(): void {

}

addNewExperience(){
this._isAddExp = true;
this.common._isAddExp.next(true)
}
saveNext(){
  this.common._isNextPage.next(2);
}

}
