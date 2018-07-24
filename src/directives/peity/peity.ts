import { Directive } from '@angular/core';

/**
 * Generated class for the PeityDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[peity]' // Attribute selector
})
export class PeityDirective {

  constructor() {
    console.log('Hello PeityDirective Directive');
  }

}
