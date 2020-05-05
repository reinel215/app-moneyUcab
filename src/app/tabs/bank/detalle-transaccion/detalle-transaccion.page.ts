import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Transaccion } from "../../../interfaces/transaccion";
import { BankService } from "../../../servicios/bank.service";

@Component({
  selector: 'app-detalle-transaccion',
  templateUrl: './detalle-transaccion.page.html',
  styleUrls: ['./detalle-transaccion.page.scss'],
})
export class DetalleTransaccionPage implements OnInit {

  transaccion : Transaccion;



  constructor(private activatedRoute: ActivatedRoute, private router : Router, private bankService: BankService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('transaccion-id')){
        
        this.router.navigate(['/tabs/bank']);
      }

      const transaccionId = paramMap.get('transaccion-id');
      this.transaccion = this.bankService.getTransaccion(transaccionId);

    });
  }

}
