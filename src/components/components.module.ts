import { NgModule } from '@angular/core';
import { ScrollBarComponent } from './scroll-bar/scroll-bar';
import { IonicModule } from 'ionic-angular';
import { ContListComponent } from './cont-list/cont-list';
import { NewsListComponent } from './news-list/news-list';
import { InformationListComponent } from './information-list/information-list';
import { CurrencyListComponent } from './currency-list/currency-list';
import { DirectivesModule } from '../directives/directives.module';
import { PairListComponent } from './pair-list/pair-list';
import { ExchangeListComponent } from './exchange-list/exchange-list';

@NgModule({
	declarations: [
		ScrollBarComponent,
		ContListComponent,
		NewsListComponent,
		InformationListComponent,
    CurrencyListComponent,
    PairListComponent,
    ExchangeListComponent,
	],
	imports: [
		IonicModule,
		DirectivesModule
	],
	schemas: [
	],
	exports: [
		ScrollBarComponent,
		ContListComponent,
		NewsListComponent,
		InformationListComponent,
    CurrencyListComponent,
    PairListComponent,
    ExchangeListComponent,
	]
})
export class ComponentsModule {}
