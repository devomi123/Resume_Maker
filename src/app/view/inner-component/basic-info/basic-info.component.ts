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
  basicInfoData:any='';
  ngOnInit(): void {
    this.createPersonalInfo();

  this.patchEmployeeData();
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

  patchEmployeeData(){

    this.basicInfoData = sessionStorage.getItem('basicinfo');
    console.log(this.basicInfoData);
    if(this.basicInfoData != null){
      this.personalInfoForm.patchValue(JSON.parse(this.basicInfoData));
     this.personalInfoForm.patchValue({
      firstname: JSON.parse(this.basicInfoData).firstName,
      lastname: JSON.parse(this.basicInfoData).lastName,
      middlename: JSON.parse(this.basicInfoData).middleName,
      profession: JSON.parse(this.basicInfoData).profession,
      mobilenumber: JSON.parse(this.basicInfoData).mobileNumber,
      emailid: JSON.parse(this.basicInfoData).emailId,
      linkdin: JSON.parse(this.basicInfoData).linkdin,
      portfolio: JSON.parse(this.basicInfoData).portfolio,
      city: JSON.parse(this.basicInfoData).city,
      country: JSON.parse(this.basicInfoData).country,
      pincode: JSON.parse(this.basicInfoData).pincode,
      dob: JSON.parse(this.basicInfoData).dob,
      maritalstatus: JSON.parse(this.basicInfoData).maritalstatus,
      gender:JSON.parse(this.basicInfoData).gender
     })
      this.personalInfoForm.updateValueAndValidity();
    }


  }

  saveNext(data:string){
    if(this.personalInfoForm.invalid){
      return;
    }
    else {
      alert('Personal Info Saved Successfully');
      this.common._isNextPage.next(data);
      sessionStorage.setItem('basicinfo',JSON.stringify(this.personalInfoForm.value));
    }
  }


}
