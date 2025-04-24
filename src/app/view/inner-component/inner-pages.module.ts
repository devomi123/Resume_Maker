import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path:'/my-account',component:MyAccountComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyAccountComponent,
    RouterModule.forChild(routes)
  ]
})
export class InnerPagesModule { }
