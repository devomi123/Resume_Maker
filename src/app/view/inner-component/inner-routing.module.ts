import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyAccountComponent } from "./my-account/my-account.component";

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'my-account',
      //   loadComponent: () =>
      //   import('./my-account/my-account.component').then(m => m.MyAccountComponent),
      // },
      {path :'my-account' ,component:MyAccountComponent}
    ]

    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InnerRoutingModule {}
