import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from "../../interfaces/usuario";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  usuario : Usuario;


  constructor(private usuarioservice : UsuarioService, public toastController : ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.usuario = this.usuarioservice.getAtributtes();
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


  guardar(){
    if((this.usuario.apellido !== '') && (this.usuario.nombre !== '') && (this.usuario.correo !== '')){
      this.usuarioservice.setAtributtes(this.usuario);
      this.presentToast('success','Los cambios se han guardado correctamente');
    }
    else{
      this.presentToast('warning','No puede dejar los valores en blanco.');
    }

  }

}
