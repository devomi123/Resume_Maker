import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-dashbord',
  imports: [],
  templateUrl: './resume-dashbord.component.html',
  styleUrl: './resume-dashbord.component.scss'
})
export class ResumeDashbordComponent implements OnInit {


  constructor(private route:Router){}

  ngOnInit(){
  }

  createResume(){
 this.route.navigate(['innerpages/upload-resume'])

  }
}
