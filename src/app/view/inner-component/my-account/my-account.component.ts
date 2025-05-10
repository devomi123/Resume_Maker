import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-my-account',
  // standalone: true,
  imports: [

  ],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})
export class MyAccountComponent implements OnInit {
  constructor( private router:Router){}
 ngOnInit(){

 }

 login(){
 sessionStorage.setItem('isHeadFoot','true')
 this.router.navigate(['/'])
 }
}
