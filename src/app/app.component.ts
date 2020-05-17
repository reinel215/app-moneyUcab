import { Component } from '@angular/core';

import { Platform, AlertController, IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    private router : Router,
    private usuarioService : UsuarioService
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesion',
      message: 'Estas seguro que deseas cerrar la sesión?',
      buttons: [
        {
          text: 'Quedarme',
          role: 'cancel'
        }, {
          text: 'Cerrar',
          handler: () => {
            this.usuarioService.setIsLogged(false);
            this.router.navigate(['/login']);
          }
        }
      ]
    })
    await alert.present();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {

        if (this.router.url == '/bank')
        this.presentAlertConfirm();
        else if (this.router.url == '/login')
        navigator['app'].exitApp();
        else
        window.history.back();
      });
      this.statusBar.backgroundColorByHexString('#5b2333');
      this.statusBar.show();
      
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Recargar",
        url   : "/bank/recargar",
        icon  : "cash-outline"
      },
      {
        title : "Pagar",
        url   : "/bank/pagar",
        icon  : "wallet-outline"
      },
      {
        title : "Reintegro de operaciones",
        url   : "/bank/reintegro",
        icon  : "lock-open-outline"
      },
      {
        title : "Usuario",
        url : "/bank/usuario",
        icon : "person-outline"
      }
    ]
  }



  cerrarSesion(){
    this.presentAlertConfirm();

  }

}
