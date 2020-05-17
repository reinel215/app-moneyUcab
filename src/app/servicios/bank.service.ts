import { Injectable } from '@angular/core';
import { Transaccion } from "../interfaces/transaccion";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private numReferenciaPrueba: number = 0; 

  private transacciones : Transaccion[];

  private saldo : number = 0;

  constructor(private http : HttpClient) { }





  async actualizarTransacciones(){
    this.transacciones = await this.http.get<Transaccion[]>('http://my-json-server.typicode.com/reinel215/fakeAPI/operaciones').toPromise();
    
    let objeto = await this.http.get<any>('http://my-json-server.typicode.com/reinel215/fakeAPI/saldo').toPromise();
    this.saldo = objeto.saldo;
    return [this.transacciones,this.saldo];

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

  getSaldo(){
    return this.saldo;
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
    this.saldo-=monto;
  }





}
