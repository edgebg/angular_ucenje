import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RezervacionaFormaComponent } from './rezervacija-form/rezervacija-form.component';
import { RezervacionaListaComponent } from './rezervacija-list/rezervacija-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"list", component: RezervacionaListaComponent},
  {path:"new", component: RezervacionaFormaComponent},
  {path:"edit/:id", component:RezervacionaFormaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
