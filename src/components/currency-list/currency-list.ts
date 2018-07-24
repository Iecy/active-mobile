import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ModalProvider } from '../../providers';

@Component({
  selector: 'currency-list',
  templateUrl: 'currency-list.html'
})
export class CurrencyListComponent implements OnInit {
  @Input() DataList: Array<any>;
  @Input() Theader: Array<any>;
  @Output() public navPage = new EventEmitter<any>();

  public peity: any;
  constructor(
    private modalProvider: ModalProvider,
  ) {
    this.peity = {
      type: 'line',
      data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
    };
  }

  ngOnInit() {
  }

  public setFreeHandle(data: any, type: string = '全网', setting: string): void {
    this.modalProvider.alert('错误', '删除自选失败');
  }
  /**
   * 跳转子页面
   * @param id 币名称
   */
  public openNavDetailsPage(id: string): void {
    this.navPage.emit(id);
  }
}
