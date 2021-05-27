import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router';
import { ImageMainComponent } from './image-main/image-main.component';
import { MainContentComponent } from './main-content/main-content.component';
import { InscriptionStickyComponent } from './inscription-sticky/inscription-sticky.component';
import { VideoComponent } from './video/video.component';
import { TrustedByComponent } from './trusted-by/trusted-by.component';



@NgModule({
  declarations: [
    ImageMainComponent,
    MainContentComponent,
    InscriptionStickyComponent,
    VideoComponent,
    TrustedByComponent
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
    InscriptionStickyComponent,
    VideoComponent,
    TrustedByComponent
  ]
})
export class ContentModule { }
