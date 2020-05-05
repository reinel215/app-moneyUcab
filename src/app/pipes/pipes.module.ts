import { NgModule } from '@angular/core';
import { NumeroPunteadoPipe } from "./numero-punteado.pipe";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [NumeroPunteadoPipe],
  exports: [NumeroPunteadoPipe]
})
export class PipeModule {}