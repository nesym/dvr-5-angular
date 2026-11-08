import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gamer } from '../model/gamer.model';
import { GamerService } from '../services/gamer.service';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  selector: 'app-recherche-par-pseudo-pipe',
  imports: [FormsModule, DatePipe, SearchFilterPipe],
  templateUrl: './recherche-par-pseudo-pipe.component.html'
})
export class RechercheParPseudoPipeComponent {
  gamers: Gamer[];
  searchTerm = '';

  constructor(private gamerService: GamerService) {
    this.gamers = gamerService.listeGamers();
  }
}