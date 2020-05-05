import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'bank',
        children:[
          {
            path: '',
            loadChildren: () => import('../bank/bank.module').then (m => m.BankPageModule)
          }
        ]
      },
      {
        path:'user',
        children:[
          {
            path: '',
            loadChildren: () => import('../user/user.module').then (m => m.UserPageModule)
          }
        ]
      },
      {
        path:'/tabs',
        redirectTo : 'tabs/bank',
        pathMatch : 'full'
      }
    ]

  },
  {
    path: '/tabs',
    redirectTo : 'tabs/bank',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
