import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }


  _isHeader = new BehaviorSubject<boolean>(false);
  _isAddExp = new BehaviorSubject<boolean>(false);


  createUsrList(data:any): Observable<any> {
    return this.http.post('/api/createuser',data)
  }

  getUsrList(): Observable<any> {
    return this.http.get('/api/users')
  }

  userLogin(data:any):Observable<any>{
    console.log(data);

    return this.http.post('/api/loginUser',data)
  }



}

