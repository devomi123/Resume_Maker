import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterModule, Routes } from '@angular/router';
import { InnerRoutingModule } from './inner-routing.module'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { InnerDashboardComponent } from './inner-dashboard/inner-dashboard.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyAccountComponent,
    InnerRoutingModule,
    FormsModule,
    InnerDashboardComponent,
   MatFormFieldModule, MatInputModule, MatIconModule
  ]
})
export class InnerPagesModule { }
