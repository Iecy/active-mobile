import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrencyDetailPage } from './currency-detail';

import { ComponentsModule } from '../../components/components.module';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highstock from 'highcharts/modules/stock.src';

@NgModule({
  declarations: [
    CurrencyDetailPage,
  ],
  imports: [
    ChartModule,
    ComponentsModule,
    IonicPageModule.forChild(CurrencyDetailPage),
  ],
  exports: [
    CurrencyDetailPage,
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, highstock ] },
  ]
})
export class CurrencyDetailPageModule {}
