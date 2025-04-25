import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'my-account',
        loadComponent: () =>
        import('./my-account/my-account.component').then(m => m.MyAccountComponent),
      },
    ]

    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InnerRoutingModule {}
