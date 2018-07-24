import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreeHandlePage } from './free-handle';

@NgModule({
  declarations: [
    FreeHandlePage,
  ],
  imports: [
    IonicPageModule.forChild(FreeHandlePage),
  ],
  exports: [
    FreeHandlePage
  ]
})
export class FreeHandlePageModule {}
