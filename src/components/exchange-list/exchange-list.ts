import { Component, Input, Output, EventEmitter  } from '@angular/core';

/**
 * Generated class for the ExchangeListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exchange-list',
  templateUrl: 'exchange-list.html'
})
export class ExchangeListComponent {
  @Output() public navPage = new EventEmitter<any>();
  constructor() {
  }

  /**
   * 跳转子页面
   * @param id 币名称
   */
  public openNavDetailsPage(id: string): void {
    console.log(id, 'openNavDetailsPage');
    this.navPage.emit(id);
  }

}
