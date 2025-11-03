import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
@Component({
  selector: 'app-basic-info',
  imports: [DatePickerModule,FormsModule],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.scss'
})
export class BasicInfoComponent implements OnInit {
  date2:any;
  ngOnInit(): void {

  }
}
