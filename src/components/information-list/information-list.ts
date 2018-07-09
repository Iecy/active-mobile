import { Component, OnInit, Input } from '@angular/core';

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
  
  constructor() {
  }

  ngOnInit(){

  }
}
