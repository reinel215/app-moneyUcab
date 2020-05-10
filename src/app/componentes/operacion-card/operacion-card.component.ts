import { Component, OnInit,Input } from '@angular/core';
import { Transaccion } from "../../interfaces/transaccion";

@Component({
  selector: 'app-operacion-card',
  templateUrl: './operacion-card.component.html',
  styleUrls: ['./operacion-card.component.scss'],
})
export class OperacionCardComponent implements OnInit {

@Input() transaccion : Transaccion;


  constructor() { }

  ngOnInit() {}

}
