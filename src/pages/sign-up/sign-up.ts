import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, MenuController, NavParams, ToastController } from 'ionic-angular';

import { SignInPage } from '../sign-in/sign-in';

import { AuthService } from '../../services/auth';

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  signInPage = SignInPage;

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
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp (form : NgForm) {
    this.authCtrl.signUp(form.value.email, form.value.password).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Success',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.navCtrl.setRoot(this.signInPage);
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
