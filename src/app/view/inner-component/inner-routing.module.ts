import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyAccountComponent } from "./my-account/my-account.component";
import { LoginComponent } from "./login/login.component";
import { InnerDashboardComponent } from "./inner-dashboard/inner-dashboard.component";

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'my-account',
      //   loadComponent: () =>
      //   import('./my-account/my-account.component').then(m => m.MyAccountComponent),
      // },
      {path :'my-account' ,component:MyAccountComponent},
      {path :'login' ,component:LoginComponent},
      {path :'dashboard' ,component:InnerDashboardComponent},
    ]

    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InnerRoutingModule {}
