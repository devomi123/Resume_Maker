import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent implements OnInit {
  constructor(private router: Router){}
  isHeader:boolean = true;
  ngOnInit() {}

  addAccount(){
    this.router.navigate(["/innerpages/login"]);
    this.isHeader = false;
    sessionStorage.setItem('isHeadFoot', String(this.isHeader))
  }

  homepage(){
    this.router.navigate([""]);

  }
}
