import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'home.html',
})
export class HomePage {
  public tabs: string = 'one';
  public barlist: Array<any>;
  public listData: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.barlist = [{
      name: '自选',
    }, {
      name: '市值',
    }, {
      name: '指数',
    }, {
      name: '平台币',
    }, {
      name: '火币',
    }, {
      name: 'BTC',
    }, {
      name: 'ETH',
    }, {
      name: 'OKEx',
    }];

    this.listData = [];
  }
  
  tabChange(e) {
    console.log(e);
  }

  ionViewDidLoad() {
  }

  openMenu() {
    this.menuCtrl.open();
  }

  showSharch() {
    this.navCtrl.push('SearchPage', {

    })
  }
  
  public BarAdd() {
    this.navCtrl.push('SearchPage');
  }

  public BarChange(item){
    console.log(item);
  }
}
