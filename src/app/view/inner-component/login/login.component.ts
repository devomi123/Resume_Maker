import { Component, OnInit,} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';

// import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-login',
  imports: [PasswordModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  value= '';
    isHeader = false;
  constructor(private route:Router){}
  ngOnInit(){}
  login(){
    this.isHeader = true;
    sessionStorage.setItem('isHeadFoot', String(this.isHeader))
    this.route.navigate(['innerpages/dashboard'])
    }
}
