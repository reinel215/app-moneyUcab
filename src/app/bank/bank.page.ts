import { Component, OnInit } from '@angular/core';
import { BankService } from "../servicios/bank.service";
import { Transaccion } from "../interfaces/transaccion";
import { Router } from '@angular/router';
import { UsuarioService } from "../servicios/usuario.service";

@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})
export class BankPage implements OnInit {
  cargando : boolean = true;
  transacciones : number | Transaccion[];
  saldo : number | Transaccion[] ;



  constructor(
    private bankService : BankService, 
    public router : Router,
    private usuarioService : UsuarioService
    ) {
  }

  ngOnInit() {
    this.bankService.actualizarTransacciones()
    .then( data => {
      [this.transacciones,this.saldo] = data;
      this.cargando = false;
    })
    
  }

  ionViewWillEnter(){
    this.transacciones = this.bankService.getTransacciones();
    this.saldo = this.bankService.getSaldo();
  }



  refrescar(){
    this.cargando = true;

    this.bankService.actualizarTransacciones()
    .then( data => {
      [this.transacciones,this.saldo] = data;
      this.cargando = false;
    } )
  }

}
