import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ScrollBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scroll-bar',
  templateUrl: 'scroll-bar.html'
})
export class ScrollBarComponent implements OnInit {
  @Input() list: Array<any>;
  @Output() addClick = new EventEmitter();
  @Output() itemChange = new EventEmitter();
  text: string;
  thisActive: number;

  constructor() {
    console.log('Hello ScrollBarComponent Component');
    this.text = 'Hello World';
    this.thisActive = 0;
  }

  ngOnInit() {

  }

  public itemChageFn(item, index) {
    this.thisActive = index;
    item.index = index;
    this.itemChange.emit(item);
  }
}
