import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import {WebcamModule} from 'ngx-webcam';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WebcamModule
    
  ], exports: [
    HomeComponent
  ]
})
export class HomeModule { }
