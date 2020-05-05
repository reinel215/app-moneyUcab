import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { ValidarCamposService } from "../servicios/validar-campos.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-prueba',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  numeroIdentificacion : string;
  contrasenia : string;

  constructor(private router: Router, private validarCamposService: ValidarCamposService, public toastController : ToastController) {
    this.contrasenia="";
    this.numeroIdentificacion= null;
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


  login(){

    //usamos el servicio para la verificacion de los numeros que nos retornara un boolean
    if(this.validarCamposService.soloNumerosEnteros(this.numeroIdentificacion) && (this.contrasenia !== '')){ 

      this.router.navigate(['bank'])

    } 
    else{
      //mostrar notificacion
      this.presentToast('warning','Los valores que coloco no cumplen con el formato establecido');
    }

    this.numeroIdentificacion="";
    this.contrasenia="";
  }

}