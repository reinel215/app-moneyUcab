import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    private statusBar: StatusBar
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

}
