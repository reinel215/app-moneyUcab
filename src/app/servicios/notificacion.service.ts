import { Injectable } from '@angular/core';
import { Notificacion } from "../interfaces/notificacion";

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor() { }


  mostrarNotificacion(titulo:string, mensaje:string, color:string, contexto : Notificacion){
    contexto.titulo=titulo;
    contexto.mensaje=mensaje;
    contexto.color=color;
    contexto.mostrar=true;
  }
}