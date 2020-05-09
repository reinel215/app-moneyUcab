import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { ValidarCamposService } from "../servicios/validar-campos.service";
import { ToastController, LoadingController } from '@ionic/angular';
import { UsuarioService } from "../servicios/usuario.service";

@Component({
  selector: 'app-prueba',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  numeroIdentificacion : string;
  contrasenia : string;


  constructor(
    private router: Router, 
    private validarCamposService: ValidarCamposService, 
    public toastController : ToastController , 
    private usuarioService : UsuarioService,
    public loadingController : LoadingController) 
  {
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


  async presentLoading() {
    

    const loading = await this.loadingController.create({
      spinner: "bubbles",
      duration: 5000,
      message: 'Espere por favor...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    loading.present();

  }



  async login(){
  
    //usamos el servicio para la verificacion de los numeros que nos retornara un boolean
    if(this.validarCamposService.soloNumerosEnteros(this.numeroIdentificacion) && (this.contrasenia !== '')){ 
      
      await this.presentLoading();

      let logeo = await this.usuarioService.iniciarSecion(this.numeroIdentificacion,this.contrasenia);
      this.loadingController.dismiss();
      
      switch (logeo){
        case 0:
          this.router.navigate(['/bank'])
          break;
        case 1: 
          this.presentToast('danger','error en la transmision');
          break;
        case 2:
          this.presentToast('danger','documento o contraseña invalidas');
      }
    

    } 
    else{
      //mostrar notificacion
      this.presentToast('warning','Los valores que coloco no cumplen con el formato establecido');
    }

    this.numeroIdentificacion="";
    this.contrasenia="";
  }

}