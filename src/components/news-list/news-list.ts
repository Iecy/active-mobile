import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the NewsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-list',
  templateUrl: 'news-list.html'
})
export class NewsListComponent implements OnInit {
  @Input() DataList: Array<any>;

  constructor() {
  }

  ngOnInit(){

  }
}
