import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { StorageService } from './core/services/sessionStorage.service';
import { ToastrModule } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    ToastrModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume_maker';
  _activeFlag = true;
  styleUrl:any;
  constructor(private sessionstorageservice: StorageService) { }
  ngOnInit() {
    this._activeFlag = true
    this.getActiveFlag();
  }
  getActiveFlag(): boolean {
    let _activeFlag
    if (typeof window !== 'undefined') {
     this.styleUrl = window.location.pathname;
    }
    if (this.styleUrl == '/innerpages/login' || this.styleUrl == '/innerpages/my-account' || this.styleUrl == '/innerpages/resume-creation') {
      this.sessionstorageservice.setItem('isHeaderFoot', 'false')
      return _activeFlag = false
    }
    else if (this.styleUrl == null || "/") {
      this.sessionstorageservice.setItem('isHeaderFoot', 'true')
      return _activeFlag = true;
    }
    else {
      return _activeFlag = JSON.parse(String(this.sessionstorageservice.getItem('isHeadFoot')))
    }

  }
  }



