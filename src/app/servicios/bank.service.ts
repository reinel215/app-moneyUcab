import { Injectable } from '@angular/core';
import { Transaccion } from "../interfaces/transaccion";

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private numReferenciaPrueba: number = 0; 

  private transacciones : Transaccion[] = [
    {
      fecha : new Date(),
      cuenta : '10281001',
      cantidad : 240500,
      modalidad : 'm', //monedero o billetera
      descripcion : "2 kilos de carne y cereal",
      numReferencia : 1542,
      isPay: true
    },
    {
      fecha : new Date(),
      cuenta : '11200813',
      cantidad : 4050500,
      modalidad : 'b', //monedero o billetera
      descripcion : "pago de los muy buenos masajes",
      numReferencia : 2000,
      isPay: false
    },
    {
      fecha : new Date(),
      cuenta : '27042411',
      cantidad : 500000,
      modalidad : 'm', //monedero o billetera
      descripcion : "pago Xbox one ultima generacion",
      numReferencia : 2500,
      isPay: true
    },
    {
      fecha : new Date(),
      cuenta : '355964412',
      cantidad : 100000000,
      modalidad : 'b', //monedero o billetera
      descripcion : "cauchos de repuesto",
      numReferencia : 3000,
      isPay: false
    },
    {
      fecha : new Date(),
      cuenta : '15649743',
      cantidad : 50000,
      modalidad : 'm', //monedero o billetera
      descripcion : "carne de primera",
      numReferencia : 3500,
      isPay: true
    },

  ];

  constructor() { }

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
