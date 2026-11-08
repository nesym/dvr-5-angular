import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gamer } from '../model/gamer.model';
import { Genre } from '../model/genre.model';
import { GamerService } from '../services/gamer.service';

@Component({
  selector: 'app-recherche-par-genre',
  imports: [FormsModule, DatePipe],
  templateUrl: './recherche-par-genre.component.html'
})
export class RechercheParGenreComponent {
  gamers: Gamer[];
  genres: Genre[];
  idGenre = 0;

  constructor(private gamerService: GamerService) {
    this.genres = gamerService.listeGenres();
    this.gamers = gamerService.listeGamers();
  }

  onChange(id: number) {
    this.idGenre = id;
    this.gamers = id === 0
      ? this.gamerService.listeGamers()
      : this.gamerService.rechercherParGenre(id);
  }
}