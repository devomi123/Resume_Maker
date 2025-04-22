import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardAddResumeComponent } from './view/dashboard-add-resume/dashboard-add-resume.component';
import { CreateOptionComponent } from './view/create-option/create-option.component';
import { UeserNetworkComponent } from './view/ueser-network/ueser-network.component';
import { ClientCountComponent } from './view/client-count/client-count.component';
import { FooterComponent } from './shared/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,
    DashboardAddResumeComponent,
    CreateOptionComponent,
    UeserNetworkComponent,
    ClientCountComponent,
    FooterComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume_maker';
}

