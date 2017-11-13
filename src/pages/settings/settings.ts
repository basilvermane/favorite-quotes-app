import { Component } from '@angular/core';
import { Toggle, MenuController } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  constructor ( private settingsSvc: SettingsService,
    private menuCtrl: MenuController) {
      this.menuCtrl.enable(false, 'menuLogin');
      this.menuCtrl.enable(true, 'menuFav');
  }
  
  onToggle(toggle: Toggle) {
    this.settingsSvc.setBackground(toggle.checked);
  }

  isChecked() {
    return this.settingsSvc.isAltBackground();
  }
}
