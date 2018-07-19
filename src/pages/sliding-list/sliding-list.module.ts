import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidingListPage } from './sliding-list';

@NgModule({
  declarations: [
    SlidingListPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidingListPage),
  ],
})
export class SlidingListPageModule {}
