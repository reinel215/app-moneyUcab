import { NgModule, Pipe } from '@angular/core';
import { NotificacionComponent } from "./notificacion/notificacion.component";
import { OperacionCardComponent } from "./operacion-card/operacion-card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [NotificacionComponent,OperacionCardComponent],
  exports: [NotificacionComponent,OperacionCardComponent]
})
export class ComponentsModule {}