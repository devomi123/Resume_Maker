import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterModule, Routes } from '@angular/router';
import { InnerRoutingModule } from './inner-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyAccountComponent,
    InnerRoutingModule
  ]
})
export class InnerPagesModule { }
