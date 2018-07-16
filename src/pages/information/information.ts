import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
  public tabs: string = 'one';
  public listNewsData: Array<any>;
  public listInformationData: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listNewsData = [];
    this.listInformationData = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  newsClick(data: any) {
    console.log(data);
    this.navCtrl.push('NewContPage');
  }

  informationClick(data: any) {
    console.log(data);
    this.navCtrl.push('InformationContPage');
  }
}
