import { Component, OnInit, Input } from '@angular/core';

// import { ModalProvider, FreeHandleProvider } from '@providers';
import { ModalProvider } from '../../providers';

@Component({
  selector: 'currency-list',
  templateUrl: 'currency-list.html'
})
export class CurrencyListComponent implements OnInit {
  @Input() DataList: Array<any>;
  @Input() Theader: Array<any>;
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
}
