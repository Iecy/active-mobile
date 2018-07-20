import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Injectable()
export class ModalProvider {

  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController,
  ) {
    console.log('Hello ModalProvider Provider');
  }
  /**
   * 弹框
   * @param title 标题
   * @param content 内容说明
   * @param buttons 按钮，为数组例如：['ok', 'cancel']
   */
  public alert(title: string, content: string, buttons=['关闭']):void {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: content,
      buttons: buttons
    });
    alert.present();
  }

}
