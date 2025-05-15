import { Routes } from '@angular/router';
import { MainDashboardComponent } from './shared/main-dashboard/main-dashboard.component';

export const routes: Routes = [
  {
    path: "innerpages",
    loadChildren: () =>
      import("./view/inner-component/inner-pages.module").then((c) => c.InnerPagesModule),
  },
  { path:"", component:MainDashboardComponent}
];
