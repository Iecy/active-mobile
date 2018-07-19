import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FreeHandleProvider {
  /**
   * 自选数据集合
   */
  public optionals: any;
  constructor(
    public http: HttpClient,
  ) {
    console.log('Hello FreeHandleProvider Provider');
    this.optionals = this.optional;
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
