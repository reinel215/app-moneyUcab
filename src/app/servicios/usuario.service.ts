import { Injectable } from '@angular/core';
import { Usuario } from "../interfaces/usuario";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public SUCCESS : number = 0;
  public ERR_TRANSMISION : number = 1;
  public ERR_INVALIDO : number = 2;

  private usuario : Usuario ={
    nombre : 'nombre',
    apellido : 'apellido',
    correo : 'correo',
    imagen : 'https://image.flaticon.com/icons/png/512/16/16363.png',
    numeroIdentificacion : 27042411
  };

  private isLogged : boolean = false;



  constructor(private http : HttpClient) { }


  getIsLogged() : boolean{
    return this.isLogged;
  }

  setIsLogged(estado : boolean): void {
    this.isLogged = estado;
  }


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


  async iniciarSecion(documento, contraseña) : Promise<number>  {
    let usuario;

    try{
      usuario = await this.http.get<any>('http://my-json-server.typicode.com/reinel215/fakeAPI/usuario').toPromise()
    }
    catch(err)  {
      console.log(err);
      return this.ERR_TRANSMISION;
    };
    

    if ( (documento == usuario.documentoIdentificacion) && (contraseña == usuario.password) ){
      this.isLogged = true;
      return this.SUCCESS;
    }

    return this.ERR_INVALIDO;

  }

}
