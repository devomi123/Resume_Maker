import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  _isHeader = new BehaviorSubject<boolean>(false);
  _isAddExp = new BehaviorSubject<boolean>(false);

}
