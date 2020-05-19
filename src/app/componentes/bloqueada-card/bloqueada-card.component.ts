import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Transaccion } from "../../interfaces/transaccion";
import { BankService } from 'src/app/servicios/bank.service';


@Component({
  selector: 'app-bloqueada-card',
  templateUrl: './bloqueada-card.component.html',
  styleUrls: ['./bloqueada-card.component.scss'],
})
export class BloqueadaCardComponent implements OnInit {

  @Input() transaccion : Transaccion;
  @Output() reintegrar : EventEmitter<any> = new EventEmitter();

  constructor(private bankService: BankService) { }

  ngOnInit() {}

  reintegro(){
    this.reintegrar.emit(this.transaccion.numReferencia);
  }


}
