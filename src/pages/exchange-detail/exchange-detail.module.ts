import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeDetailPage } from './exchange-detail';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ExchangeDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ExchangeDetailPage),
  ],
  exports: [
    ExchangeDetailPage
  ]
})
export class ExchangeDetailPageModule {}
