import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';



@NgModule({
  declarations: [NgifComponent, NgforComponent, NgclassComponent, NgstyleComponent],
  imports: [
    CommonModule
  ],
   exports:[
      NgifComponent,
      NgforComponent,
      NgclassComponent,
      NgstyleComponent
  ]
})
export class DirectivesModule { }
