import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }


  soloNumerosEnteros(numero : any) : Boolean {
    var expresionNumeros = /^[0-9]+$/;

    try{
      numero=numero.toString();
    }
    catch{
      return false;
    }
   return expresionNumeros.test(numero);
  }


  correoValido(correo : any) {
    var expresionCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    try{
      correo=correo.toString();
    }
    catch{
      return false;
    }


    return expresionCorreo.test(correo);
  }
}
