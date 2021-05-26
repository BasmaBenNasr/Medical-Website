import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router';
import { ImageMainComponent } from './image-main/image-main.component';
import { MainContentComponent } from './main-content/main-content.component';
import { InscriptionStickyComponent } from './inscription-sticky/inscription-sticky.component';



@NgModule({
  declarations: [
    ImageMainComponent,
    MainContentComponent,
    InscriptionStickyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    ImageMainComponent,
    MainContentComponent,
    InscriptionStickyComponent
  ]
})
export class ContentModule { }
