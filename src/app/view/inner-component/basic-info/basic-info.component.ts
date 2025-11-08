import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePickerModule } from 'primeng/datepicker';
import { CommonService } from '../../../core/services/common.service';
@Component({
  selector: 'app-basic-info',
  imports: [DatePickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.scss'
})
export class BasicInfoComponent implements OnInit {

  constructor(private fb: FormBuilder , private router:Router , private common:CommonService) { }
  date2: any;
  personalInfoForm!:FormGroup;
  ngOnInit(): void {
    this.createPersonalInfo();


  }

  createPersonalInfo() {
    this.personalInfoForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      middleName: [''],
      profession: [''],
      mobileNumber: [''],
      emailId: [''],
      linkdin: [''],
      portfolio: [''],
      city: [''],
      country: [''],
      pincode: [''],
      dob: [''],
      maritalstatus: [''],
      gender: [''],
    });
  }

  addPersonalinfo(){
    if(this.personalInfoForm.invalid){
      return;
    }
    else {
      sessionStorage.setItem('basicinfo',JSON.stringify(this.personalInfoForm.value));
    }
  }
}
