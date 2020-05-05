import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss'],
})
export class NotificacionComponent implements OnInit {



  @Input() titulo : string ;
  @Input() mensaje : string;
  @Input() color : string;
  @Input() mostrar: boolean;


  @Output() cerrarOut = new EventEmitter<string>();

  constructor() {
   }

  ngOnInit() {}


  cerrar(){
    this.cerrarOut.emit("c");
  }

  abrir(){
    this.mostrar = true
  }

}
