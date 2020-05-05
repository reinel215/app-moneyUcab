import { NgModule } from '@angular/core';
import { NotificacionComponent } from "./notificacion/notificacion.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [NotificacionComponent],
  exports: [NotificacionComponent]
})
export class ComponentsModule {}