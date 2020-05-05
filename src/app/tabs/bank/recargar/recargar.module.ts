import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargarPageRoutingModule } from './recargar-routing.module';

import { RecargarPage } from './recargar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargarPageRoutingModule
  ],
  declarations: [RecargarPage]
})
export class RecargarPageModule {}
