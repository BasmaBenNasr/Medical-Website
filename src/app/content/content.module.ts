import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router';
import { ImageMainComponent } from './image-main/image-main.component';



@NgModule({
  declarations: [
    ImageMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    ImageMainComponent
  ]
})
export class ContentModule { }
