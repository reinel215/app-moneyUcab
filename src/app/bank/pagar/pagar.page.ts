import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/servicios/bank.service';
import { ValidarCamposService } from 'src/app/servicios/validar-campos.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {

  private documentoIdentificacion : string;
  private monto : number;
  private descripcion : string;

  constructor(private bankService: BankService, private validarCamposService : ValidarCamposService , public toastController: ToastController) { }

  ngOnInit() {
  }


  async presentToast(color : string, mensaje : string) {
    const toast = await this.toastController.create({
      message: mensaje,
      color : color,
      buttons: [ 
        {
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }



  pagar(){

    if ( (this.descripcion !== '') && (this.validarCamposService.soloNumerosEnteros(this.documentoIdentificacion)) && (this.validarCamposService.soloNumerosEnteros(this.monto)) ){
      this.bankService.pagar(this.documentoIdentificacion,this.monto,this.descripcion);
      this.presentToast('success','El pago se ha realizado satisfactoriamente');
    }
    else{
      this.presentToast('warning','Los campos estan incompletos o tienen un formato invalido.');
    }



    this.descripcion = "";
    this.monto = null;
    this.documentoIdentificacion = null;
  }

}
