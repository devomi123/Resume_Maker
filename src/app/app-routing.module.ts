import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./shared/header/header.component";
import { MainDashboardComponent } from "./shared/main-dashboard/main-dashboard.component";

const routes: Routes = [

  {
    path: "innerpages",
    loadChildren: () =>
      import("./view/inner-component/inner-pages.module").then((c) => c.InnerPagesModule),
  },
  { path:"", component:MainDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
