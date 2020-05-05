import { Injectable } from '@angular/core';
import { Usuario } from "../interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario : Usuario ={
    nombre : 'nombre',
    apellido : 'apellido',
    correo : 'correo',
    imagen : 'https://image.flaticon.com/icons/png/512/16/16363.png',
    numeroIdentificacion : 27042411
  };



  constructor() { }


  getAtributtes() : Usuario{
    return {
      nombre : this.usuario.nombre,
      apellido : this.usuario.apellido,
      correo : this.usuario.correo,
      imagen : this.usuario.imagen,
      numeroIdentificacion : this.usuario.numeroIdentificacion
    };
  }

  setAtributtes(usuario){
    this.usuario = usuario;
  }


  mostrar(){
    console.log(this.usuario);
  }

}
