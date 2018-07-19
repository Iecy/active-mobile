import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'currency-list',
  templateUrl: 'currency-list.html'
})
export class CurrencyListComponent implements OnInit {
  @Input() DataList: Array<any>;
  @Input() Theader: Array<any>;
  constructor() {
  }

  ngOnInit() {}
}
