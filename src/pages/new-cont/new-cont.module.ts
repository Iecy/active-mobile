import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewContPage } from './new-cont';

@NgModule({
  declarations: [
    NewContPage,
  ],
  imports: [
    IonicPageModule.forChild(NewContPage),
  ],
})
export class NewContPageModule {}
