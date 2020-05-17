import { Component, OnInit } from '@angular/core';
import { Transaccion } from "../../interfaces/transaccion";
import { BankService } from "../../servicios/bank.service";

@Component({
  selector: 'app-reintegro',
  templateUrl: './reintegro.page.html',
  styleUrls: ['./reintegro.page.scss'],
})
export class ReintegroPage implements OnInit {

  bloqueadas : Transaccion[] = [];
  hayBloqueadas : boolean = true;
  cargando : boolean = true;

  constructor(private bankService : BankService) { }

  ngOnInit() {
    this.bankService.actualizarBloqueadas()
    .then( (data)=> {

      if(data.length == 0) this.hayBloqueadas = false
      else this.hayBloqueadas = true;

      this.bloqueadas = data;
      this.cargando = false;
    } )
  }

  ionViewWillEnter(){
  }

}
