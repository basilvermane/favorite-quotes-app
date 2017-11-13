import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  template:`
  Options
  <button ion-button (click)="save()">Save</button>
  <button ion-button (click)="addQuote()">Add Quote</button>
  <button ion-button (click)="clearAll()">Clear All</button>
  `
})
export class PopoverPage {

  constructor(public viewCtrl: ViewController) {
  }

  save() {

  }

  addQuote() {

  }

  clearAll() {

  }
}
