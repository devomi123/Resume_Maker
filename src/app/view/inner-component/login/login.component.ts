import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private route:Router){}
  ngOnInit(){}
  login(){
this.route.navigate(['innerpages/dashboard'])
    }
}
