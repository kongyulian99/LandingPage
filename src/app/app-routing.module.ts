import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ArtDetailComponent } from './pages/arts/art-detail/art-detail.component';
import { ArtsComponent } from './pages/arts/arts.component';
import { FilmDetailComponent } from './pages/films/film-detail/film-detail.component';
import { FilmsComponent } from './pages/films/films.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'arts', component: ArtsComponent},
  {path: 'arts/:id', component: ArtDetailComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'films/:id', component: FilmDetailComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
