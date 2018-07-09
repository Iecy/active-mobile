import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the ContListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cont-list',
  templateUrl: 'cont-list.html'
})
export class ContListComponent implements OnInit {
  @Input() DataList: Array<any>;

  constructor() {
  }

  ngOnInit() {

  }
}
