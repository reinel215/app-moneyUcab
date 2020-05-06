import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

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
    private router : Router
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
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
            this.router.navigate(['/login']);
          }
        }
      ]
    })
    await alert.present();
  }


  cerrarSesion(){
    this.presentAlertConfirm();

  }

}
