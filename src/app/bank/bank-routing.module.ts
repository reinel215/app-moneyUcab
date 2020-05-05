import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankPage } from './bank.page';

const routes: Routes = [
  {
    path: '',
    component: BankPage
  },
  {
    path: 'detalle',
    children: [
      {
        path: ':transaccion-id',
        loadChildren: () => import('./detalle-transaccion/detalle-transaccion.module').then( m => m.DetalleTransaccionPageModule)
      }
    ],
  },
  {
    path: 'recargar',
    loadChildren: () => import('./recargar/recargar.module').then( m => m.RecargarPageModule)
  },
  {
    path: 'pagar',
    loadChildren: () => import('./pagar/pagar.module').then( m => m.PagarPageModule)
  },
  {
    path: 'reintegro',
    loadChildren: () => import('./reintegro/reintegro.module').then( m => m.ReintegroPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankPageRoutingModule {}
