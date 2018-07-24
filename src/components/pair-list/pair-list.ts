import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pair-list',
  templateUrl: 'pair-list.html'
})
export class PairListComponent {
  @Output() public navPage = new EventEmitter<any>();

  constructor() {
  }

  /**
   * 跳转子页面
   * @param id 币名称
   */
  public openNavDetailsPage(id: string): void {
    this.navPage.emit(id);
  }

}
