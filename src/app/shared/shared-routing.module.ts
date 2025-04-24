
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'role',
      //   loadComponent: () =>
      //   import('./role/role.component').then(m => m.RoleComponent),
      // },
      // {
      //   path: 'add-update-role',
      //   loadComponent: () =>
      //   import('./role/add-update-role/add-update-role.component').then(m => m.AddUpdateRoleComponent)
      // },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}

