import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyAccountComponent } from "./my-account/my-account.component";
import { LoginComponent } from "./login/login.component";
import { InnerDashboardComponent } from "./inner-dashboard/inner-dashboard.component";
import { ResumeDashbordComponent } from "./resume-dashbord/resume-dashbord.component";
import { UploadCurrentResumeComponent } from "./upload-current-resume/upload-current-resume.component";
import { ResumeCrationComponent } from "./resume-cration/resume-cration.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path :'my-account' ,component:MyAccountComponent},
      {path :'login' ,component:LoginComponent},
      {path :'dashboard' ,component:InnerDashboardComponent},
      {path :'resume-dashboard' ,component:ResumeDashbordComponent},
      {path :'upload-resume' ,component:UploadCurrentResumeComponent},
      {path :'resume-creation' ,component:ResumeCrationComponent},

    ]

    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InnerRoutingModule {}
