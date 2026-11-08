import { Routes } from '@angular/router';
import { GamersComponent } from './gamers/gamers.component';
import { AddGamerComponent } from './add-gamer/add-gamer.component';
import { UpdateGamerComponent } from './update-gamer/update-gamer.component';

import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParPseudoComponent } from './recherche-par-pseudo/recherche-par-pseudo.component';
import { RechercheParPseudoPipeComponent } from './recherche-par-pseudo-pipe/recherche-par-pseudo-pipe.component';



export const routes: Routes = [
  { path: 'recherche-par-genre', component: RechercheParGenreComponent },
{ path: 'recherche-par-pseudo', component: RechercheParPseudoComponent },
  { path: 'recherche-par-pseudo-pipe', component: RechercheParPseudoPipeComponent },
  { path: 'gamers', component: GamersComponent },
  { path: 'add-gamer', component: AddGamerComponent },
  { path: 'update-gamer/:id', component: UpdateGamerComponent },
  { path: '', redirectTo: 'gamers', pathMatch: 'full' }
];
