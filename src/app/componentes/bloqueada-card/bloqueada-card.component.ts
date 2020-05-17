import { Component, OnInit, Input } from '@angular/core';
import { Transaccion } from "../../interfaces/transaccion";


@Component({
  selector: 'app-bloqueada-card',
  templateUrl: './bloqueada-card.component.html',
  styleUrls: ['./bloqueada-card.component.scss'],
})
export class BloqueadaCardComponent implements OnInit {

  @Input() transaccion : Transaccion;

  constructor() { }

  ngOnInit() {}

}
