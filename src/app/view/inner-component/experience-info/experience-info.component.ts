import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
@Component({
  selector: 'app-experience-info',
  imports: [FormsModule,DatePickerModule],
  templateUrl: './experience-info.component.html',
  styleUrl: './experience-info.component.scss'
})
export class ExperienceInfoComponent {

}
