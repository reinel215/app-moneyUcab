import { Injectable } from '@angular/core';
import { Transaccion } from "../interfaces/transaccion";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private numReferenciaPrueba: number = 0; 

  private transacciones : Transaccion[];

  private bloqueadas : Transaccion[];

  private saldo : number = 0;

  constructor(private http : HttpClient) { }


  public yaloHice : boolean = false; //atributo para ayudar a la simulacion;



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

  recargar( cuenta: string, monto : number, descripcion : string ){
    this.numReferenciaPrueba++;

    var newTransaccion : Transaccion =  {
      cantidad : monto,
      cuenta : cuenta,
      descripcion : descripcion,
      fecha : new Date(),
      isPay : false,
      modalidad : 'm',
      numReferencia : this.numReferenciaPrueba
    };

    this.transacciones.push(newTransaccion);
    this.saldo+=monto
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


  async actualizarBloqueadas(){
    this.bloqueadas = await this.http.get<Transaccion[]>('http://my-json-server.typicode.com/reinel215/fakeAPI/bloqueadas').toPromise();
    return this.bloqueadas;
  }

  deleteBloqueadas(numeroReferencia){
    this.bloqueadas = this.bloqueadas.filter( operacion => numeroReferencia!==operacion.numReferencia);
  }

  getBloqueadas(){
    return this.bloqueadas;
  }

}
