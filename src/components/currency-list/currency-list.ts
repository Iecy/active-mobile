import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import { ModalProvider, FreeHandleProvider } from '@providers';
import { ModalProvider } from '../../providers';
// import { CurrencyDetailComponent } from '../currency-detail/currency-detail';

@Component({
  selector: 'currency-list',
  templateUrl: 'currency-list.html'
})
export class CurrencyListComponent implements OnInit {
  @Input() DataList: Array<any>;
  @Input() Theader: Array<any>;
  @Output() public navPage = new EventEmitter<any>();
  constructor(
    private modalProvider: ModalProvider,
    // private freeHand: FreeHandleProvider,
  ) {
  }

  ngOnInit() {}

  public setFreeHandle(data: any, type: string = '全网', setting: string): void {
    console.log(data, 'this is data');
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
