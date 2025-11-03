import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { StorageService } from '../../core/services/sessionStorage.service';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent implements OnInit {
  constructor(private router: Router,private sessionstorageservice: StorageService){}
  isHeader:boolean = true;
  ngOnInit() {
    this.sessionstorageservice.setItem('isHeadFoot', String(this.isHeader))
  }

  addAccount(){
    this.router.navigate(["/innerpages/login"]);
    this.isHeader = false;
    this.sessionstorageservice.setItem('isHeadFoot', String(this.isHeader))
  }

  homepage(){
    this.router.navigate([""]);
    this.isHeader = true;
    this.sessionstorageservice.setItem('isHeadFoot', String(this.isHeader))

  }
}
