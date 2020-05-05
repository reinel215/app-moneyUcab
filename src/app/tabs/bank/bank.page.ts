import { Component, OnInit } from '@angular/core';
import { BankService } from "../../servicios/bank.service";
import { Transaccion } from "../../interfaces/transaccion";

@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})
export class BankPage implements OnInit {

  transacciones : Transaccion[] = [];

  constructor(private bankService : BankService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.transacciones = this.bankService.getTransacciones();
  }


  funcion(){
    console.log("hola mundo");
  }

}
