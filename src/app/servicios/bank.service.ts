import { Injectable } from '@angular/core';
import { Transaccion } from "../interfaces/transaccion";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private numReferenciaPrueba: number = 0; 

  private transacciones : Transaccion[];

  constructor(private http : HttpClient) { }





  async actualizarTransacciones(){
    let data = await this.http.get<Transaccion[]>('http://my-json-server.typicode.com/reinel215/fakeAPI/operaciones').toPromise();
    this.transacciones = data;
    return this.transacciones;

  }

  getTransacciones(){
    return this.transacciones;
  }


  getTransaccion(transaccionId : string){
    return{
      ...this.transacciones.find(transaccion =>{
        let numero = transaccion.numReferencia.toString();
        return numero === transaccionId
      } )
    }
  }

  recargar( cuenta: string, cantidad : number, descripcion : string ){
    this.numReferenciaPrueba++;

    var newTransaccion : Transaccion =  {
      cantidad : cantidad,
      cuenta : cuenta,
      descripcion : descripcion,
      fecha : new Date(),
      isPay : false,
      modalidad : 'm',
      numReferencia : this.numReferenciaPrueba
    };

    this.transacciones.push(newTransaccion);
  }


  pagar(cuenta: string, monto : number, descripcion : string){
    this.numReferenciaPrueba++;

    var newTransaccion : Transaccion = {
      cantidad : monto,
      cuenta : cuenta,
      descripcion : descripcion,
      fecha : new Date(),
      isPay : true,
      modalidad : 'm',
      numReferencia : this.numReferenciaPrueba
    }

    this.transacciones.push(newTransaccion);
  }





}
