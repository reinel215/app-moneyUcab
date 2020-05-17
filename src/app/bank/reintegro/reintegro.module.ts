import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReintegroPageRoutingModule } from './reintegro-routing.module';

import { ReintegroPage } from './reintegro.page';

import { BloqueadaCardComponent } from "../../componentes/bloqueada-card/bloqueada-card.component";
import { PipeModule } from "../../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReintegroPageRoutingModule,
    PipeModule
  ],
  declarations: [ReintegroPage ,BloqueadaCardComponent]
})
export class ReintegroPageModule {}
