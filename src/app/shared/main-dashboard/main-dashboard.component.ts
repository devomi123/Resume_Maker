import { Component } from '@angular/core';
import { ClientCountComponent } from '../../view/client-count/client-count.component';
import { CreateOptionComponent } from '../../view/create-option/create-option.component';
import { DashboardAddResumeComponent } from '../../view/dashboard-add-resume/dashboard-add-resume.component';
import { UeserNetworkComponent } from '../../view/ueser-network/ueser-network.component';


@Component({
  selector: 'app-main-dashboard',
  imports: [
    DashboardAddResumeComponent,
    CreateOptionComponent,
    UeserNetworkComponent,
    ClientCountComponent,
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {

}
