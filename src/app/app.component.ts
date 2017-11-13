import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { AuthService } from '../services/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  logInPage = SignInPage;
  signUpPage = SignUpPage;

  @ViewChild('sideMenuContent') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private authCtrl: AuthService,
    private toastCtrl: ToastController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyBuDl_I5WJW2ZS7aLFnlxTYrReEOBwYApI",
      authDomain: "favorite-quotes-app.firebaseapp.com"
    });

    /*firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //logged in
      } else {
        //not logged in
      }
    });*/
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  logout () {
    this.authCtrl.logOut().then(() => {
      let toast = this.toastCtrl.create({
        message: 'Logged out',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.nav.setRoot(this.logInPage);
      this.menuCtrl.close();
    }).catch(error => {
      let toast = this.toastCtrl.create({
        message: error.message,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }

}
