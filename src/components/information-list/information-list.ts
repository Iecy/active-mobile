import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the InformationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'information-list',
  templateUrl: 'information-list.html'
})
export class InformationListComponent implements OnInit {
  @Input() DataList: Array<any>;
  @Output() itemClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(){

  }
}
