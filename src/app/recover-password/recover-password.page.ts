import { Component, OnInit } from '@angular/core';
import { ValidarCamposService } from '../servicios/validar-campos.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  correo: any;


  constructor(private validarCamposService: ValidarCamposService, public toastController: ToastController) { 
    this.correo="";
  }

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


  enviarCorreo(){
    

    if(this.validarCamposService.correoValido(this.correo)){
      this.presentToast('success','El mensaje de recuperación se ha enviado satisfactoriamente');
    }
    else{
      this.presentToast('warning','El formato del correo no es correcto. Intentelo de nuevo');
    }
  }

}
