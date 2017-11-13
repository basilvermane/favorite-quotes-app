import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ToastController, MenuController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { AuthService } from '../../services/auth';

/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  tabsPage = TabsPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authCtrl: AuthService,
    private toastCtrl: ToastController,
    private menuCtrl: MenuController) {
      this.menuCtrl.enable(true, 'menuLogin');
      this.menuCtrl.enable(false, 'menuFav');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signIn(form : NgForm) {
    this.authCtrl.signIn(form.value.email, form.value.password).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Success',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.navCtrl.setRoot(this.tabsPage);
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
