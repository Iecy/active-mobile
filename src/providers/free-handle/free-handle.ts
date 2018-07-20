import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ModalProvider } from '../modal/modal';

@Injectable()
export class FreeHandleProvider {
  /**
   * 自选数据集合
   */
  public optionals: any;
  constructor(
    public http: HttpClient,
    public modalProvider: ModalProvider,
  ) {
    this.optionals = this.optional;
  }

  /**
   * 添加自选
   * @param data 数据
   * @param type 平台类型
   */
  public addOptional(data: any, type: string = '全网') {
    const optional_list = this.optional;

    if (!optional_list.find(item =>
      item.coin === data.coin.toLowerCase() &&
      item.exchange === type.toLowerCase() &&
      item.pair === data.pair)
    ) {
      optional_list.push(data);
      data.optional = true;
    }
    this.optional = optional_list;
  }
  /**
   * 删除自选
   * @param data
   * @param type
   */
  public delOptional(data: any, type: string = '全网') {
    const optional_list = this.optional;

    // tslint:disable-next-line:max-line-length
    const index = optional_list.findIndex(item => item.coin === data.coin.toLowerCase() && item.exchange === type.toLowerCase() && item.pair === data.pair);
    if (index !== -1) {
      this.optionals.splice(index, 1);
    } else {
      this.modalProvider.alert('错误', '删除自选失败');
    }
    this.optional = this.optionals;
  }

  /**
   * 检测是否自选
   * @param data 数据
   * @param type 平台类型
   */
  public checkOptional(data: any, type: string = '全网'): Array<any> {
    data.forEach(item => {
      item.optional = this.checkOneItem(item, type);
    });
    return data || [];
  }
  /**
   * 某条数据是否已自选
   * @param item
   * @param type
   */
  public checkOneItem(item: any, type: string): boolean {
    const optional_list = this.optional;
    let bool = false;
    optional_list.forEach(dom => {
      if (
        item.coin.toLowerCase() === dom.coin &&
        dom.exchange === type.toLowerCase() &&
        dom.pair === item.pair
      ) {
        bool = true;
      }
    });
    return bool;
  }

  /**
   * 设置自选
   */
  public set optional(data: any) {
    window.localStorage.setItem('OPTIONAL', JSON.stringify(data));
    this.optionals = this.optional;
  }
  /**
   * 获取自选列表
   */
  public get optional(): any {
    const _list = window.localStorage.getItem('OPTIONAL');
    return _list ? JSON.parse(_list) : [];
  }

}
