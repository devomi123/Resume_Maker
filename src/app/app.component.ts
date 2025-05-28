import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume_maker';
  _activeFlag = true;
  ngOnInit() {
    this._activeFlag = true
    this.getActiveFlag();
  }
  getActiveFlag(): boolean {
    let _activeFlag
    let styleUrl = window.location.pathname;
    console.log(styleUrl);

    if (styleUrl == '/innerpages/login' || styleUrl == '/innerpages/my-account' || styleUrl == '/innerpages/resume-creation') {
      sessionStorage.setItem('isHeaderFoot', 'false')
      return _activeFlag = false
    }

    else if (styleUrl == null) {
      sessionStorage.setItem('isHeaderFoot', 'true')

      return _activeFlag = true;
    }
    else {
      return _activeFlag = JSON.parse(String(sessionStorage.getItem('isHeadFoot')))
    }
  }
}

