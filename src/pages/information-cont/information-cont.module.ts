import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationContPage } from './information-cont';

@NgModule({
  declarations: [
    InformationContPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationContPage),
  ],
})
export class InformationContPageModule {}
