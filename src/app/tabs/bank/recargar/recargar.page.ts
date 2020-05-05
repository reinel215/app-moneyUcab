import { Component, OnInit } from '@angular/core';
import { ValidarCamposService } from 'src/app/servicios/validar-campos.service';
import { BankService } from 'src/app/servicios/bank.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recargar',
  templateUrl: './recargar.page.html',
  styleUrls: ['./recargar.page.scss'],
})
export class RecargarPage implements OnInit {

  private cuentaBancaria : string;
  private monto : number;
  private descripcion : string;

  constructor(private validarCamposService : ValidarCamposService, private bankService: BankService, public toastController : ToastController) { }

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



  recargar(){

    if( (this.descripcion !== '') && this.validarCamposService.soloNumerosEnteros(this.cuentaBancaria) && this.validarCamposService.soloNumerosEnteros(this.monto)){
    this.bankService.recargar(this.cuentaBancaria,this.monto,this.descripcion);
    this.presentToast('success', 'La recarga se ha realizado satisfactoriamente');
    }
    else{
      this.presentToast('warning','Los campos estan incompletos o tienen un formato invalido.');
    }



    this.cuentaBancaria = null;
    this.monto = null;
    this.descripcion = '';
  }

}
