import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inner-dashboard',
  imports: [],
  templateUrl: './inner-dashboard.component.html',
  styleUrl: './inner-dashboard.component.scss'
})
export class InnerDashboardComponent implements OnInit {

  constructor(private route: Router) { }
  ngOnInit() {
  }

  createResume() {
    // this.route.navigate(['innerpages/inner-dashboard'])
  }
}
