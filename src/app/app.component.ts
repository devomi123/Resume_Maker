import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardAddResumeComponent } from './view/dashboard-add-resume/dashboard-add-resume.component';
import { CreateOptionComponent } from './view/create-option/create-option.component';
import { UeserNetworkComponent } from './view/ueser-network/ueser-network.component';
import { ClientCountComponent } from './view/client-count/client-count.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './view/inner-component/login/login.component';
import { MainDashboardComponent } from './shared/main-dashboard/main-dashboard.component';
import { MyAccountComponent } from './view/inner-component/my-account/my-account.component';
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
  ngOnInit() {


  console.log(
    window.location.origin
  );
  }
  getActiveFlag(): boolean {
    let _activeFlag
    if(window.location.origin == 'http://localhost:4200'){
      _activeFlag = true
    }
    _activeFlag= JSON.parse(String(sessionStorage.getItem('isHeadFoot')))
    console.log(_activeFlag );

    return _activeFlag == null ?false:false
  }
}

