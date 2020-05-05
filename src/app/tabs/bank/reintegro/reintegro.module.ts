import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReintegroPageRoutingModule } from './reintegro-routing.module';

import { ReintegroPage } from './reintegro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReintegroPageRoutingModule
  ],
  declarations: [ReintegroPage]
})
export class ReintegroPageModule {}
