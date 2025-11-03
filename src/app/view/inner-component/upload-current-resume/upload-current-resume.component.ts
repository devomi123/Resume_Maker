import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-upload-current-resume',
  imports: [],
  templateUrl: './upload-current-resume.component.html',
  styleUrl: './upload-current-resume.component.scss'
})
export class UploadCurrentResumeComponent implements OnInit {
constructor(private router:Router){}
ngOnInit(): void {

}
continueResume(){
 this.router.navigate(['innerpages/resume-creation']);
}
}
