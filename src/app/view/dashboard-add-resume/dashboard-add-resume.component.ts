import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-dashboard-add-resume',
  imports: [ButtonModule,PasswordModule,FormsModule,ReactiveFormsModule],
  templateUrl: './dashboard-add-resume.component.html',
  styleUrl: './dashboard-add-resume.component.scss'
})
export class DashboardAddResumeComponent {
  value:any
}
