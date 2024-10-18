import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RezervacionaFormaComponent } from '../rezervacija-form/rezervacija-form.component';
import { RezervacionaListaComponent } from '../rezervacija-list/rezervacija-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    RezervacionaFormaComponent,
    RezervacionaListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ]
})
export class RezervacijaModul { }
