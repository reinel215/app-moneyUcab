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
    if (this.bankService.yaloHice) {
      this.bloqueadas = this.bankService.getBloqueadas();
      this.cargando = false
      return;// borrar luego esto
    }

    this.bankService.actualizarBloqueadas()
    .then( (data)=> {

      if(data.length == 0) this.hayBloqueadas = false
      else this.hayBloqueadas = true;

      this.bloqueadas = data;
      this.cargando = false;

      this.bankService.yaloHice = true; //borrar luego esto
    } )
  }

  ionViewWillEnter(){
  }



  onReintegro(numReferencia){
    let operacion = this.bloqueadas.find( (operacion) => operacion.numReferencia===numReferencia );

    this.bankService.pagar(operacion.cuenta,operacion.cantidad,operacion.descripcion);
    this.bankService.deleteBloqueadas(operacion.numReferencia);

    this.bloqueadas = this.bloqueadas.filter( (operacion) => operacion.numReferencia!==numReferencia );
  }

}
