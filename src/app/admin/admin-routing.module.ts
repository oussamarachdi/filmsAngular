import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';

const routes: Routes = [{ path: '', component: AdminComponent, children: [
  {path : 'ajouter', component: AjouterFilmComponent},
  {path : 'lister', component: ListerFilmsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
