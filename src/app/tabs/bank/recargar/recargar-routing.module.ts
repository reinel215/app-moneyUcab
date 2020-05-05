import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargarPage } from './recargar.page';

const routes: Routes = [
  {
    path: '',
    component: RecargarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargarPageRoutingModule {}
