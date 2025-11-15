import { Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { BasicInfoComponent } from "../basic-info/basic-info.component";
import { ExperienceInfoComponent } from "../experience-info/experience-info.component";
// import { WorkingHistoryComponent } from '../working-history/working-history.component';
import { pageRoleNum } from '../../../shared/ExtParameter/enum'

import { CommonModule } from '@angular/common';
import { CommonService } from '../../../core/services/common.service';
import { AcadmicJournyComponent } from "../acadmic-journy/acadmic-journy.component";
import { ResumeDashbordComponent } from "../resume-dashbord/resume-dashbord.component";
import { SkilltoolComponent } from "../skilltool/skilltool.component";
import { SummaryComponent } from "../summary/summary.component";
import { ExtrasectionComponent } from "../extrasection/extrasection.component";
@Component({
  selector: 'app-resume-cration',
  imports: [TimelineModule, BasicInfoComponent, ExperienceInfoComponent, CommonModule, AcadmicJournyComponent, SkilltoolComponent, SummaryComponent, ExtrasectionComponent],
  templateUrl: './resume-cration.component.html',
  styleUrl: './resume-cration.component.scss'
})
export class ResumeCrationComponent implements OnInit {
  constructor(private common: CommonService) { }
  _isShowWorkExp: any;
  clickCount = 0;
  _isRoleNum: any = pageRoleNum;
  _pageText: any;
  ngOnInit(): void {
    this.common._isNextPage.subscribe((res => {
      this._pageText = res;
      console.log(res);
    }))
  }
  timlineData = [
    {
      "id": 1,
      "date": "2023-10-01",
      "title": "Resume Created",
      "description": "Your resume has been created successfully.",
      "status": "completed"
    },
    {
      "id": 2,
      "date": "2023-10-02",
      "title": "Skills Added",
      "description": "You have added new skills to your resume.",
      "status": "completed"
    },
    {
      "id": 3,
      "date": "2023-10-03",
      "title": "Experience Updated",
      "description": "Your work experience has been updated.",
      "status": "in-progress"
    },
    {
      "id": 4,
      "date": "2023-10-04",
      "title": "Education Added",
      "description": "Your education details have been added.",
      "status": "pending"
    }
  ]
  getIsShowworkHistory() {
    this.common._isAddExp.subscribe((res => {
      console.log(res);
      this._isShowWorkExp = res;

    }))

    this.clickCount++
    console.log(pageRoleNum.WORK_EXPERIENCE)

    console.log(this.clickCount);
    this._isShowWorkExp = this.clickCount;

  }

  previousStep() {
    this.clickCount--
  }


}
