import { NgModule } from '@angular/core';
import { ScrollBarComponent } from './scroll-bar/scroll-bar';
import { IonicModule } from 'ionic-angular';
import { ContListComponent } from './cont-list/cont-list';
import { NewsListComponent } from './news-list/news-list';
import { InformationListComponent } from './information-list/information-list';

@NgModule({
	declarations: [
		ScrollBarComponent,
    	ContListComponent,
    	NewsListComponent,
		InformationListComponent
	],
	imports: [
		IonicModule
	],
	schemas: [
	],
	exports: [
		ScrollBarComponent,
		ContListComponent,
		NewsListComponent,
		InformationListComponent
	]
})
export class ComponentsModule {}
