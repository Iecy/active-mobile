import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PairDetailPage } from './pair-detail';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    PairDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PairDetailPage),
  ],
  exports: [
    PairDetailPage
  ]
})
export class PairDetailPageModule {}
