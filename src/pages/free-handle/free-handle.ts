import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface Item {
  label: string;
  value: string;
}

@IonicPage()
@Component({
  selector: 'page-free-handle',
  templateUrl: 'free-handle.html',
})
export class FreeHandlePage {
  /**
   * 顶部tab菜单
   */
  public segments: Array<Item>;
  /**
   * 当前tab
   */
  public currentSegment: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.segments = [
      { label: '币种', value: 'currency' },
      { label: '交易对', value: 'pair' }
    ];
    this.currentSegment = 'currency';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FreeHandlePage');
  }
  /**
   * 切换tab
   * @param e
   */
  public tabChange(e) {
    switch (e.value) {
      case 'currency':
      break;
      case 'pair':
      break;
    }
  }

}
