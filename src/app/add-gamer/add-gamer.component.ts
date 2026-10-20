import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Gamer } from '../model/gamer.model';
import { Genre } from '../model/genre.model';
import { GamerService } from '../services/gamer.service';

@Component({
  selector: 'app-add-gamer',
  imports: [FormsModule],
  templateUrl: './add-gamer.component.html'
})
export class AddGamerComponent {
  newGamer = new Gamer();
  genres: Genre[];
  newIdGenre!: number;

  constructor(private gamerService: GamerService, private router: Router) {
    this.genres = gamerService.listeGenres();
  }

  addGamer() {
    this.newGamer.genre = this.gamerService.consulterGenre(this.newIdGenre);
    if (this.newGamer.dateInscription) {
  this.newGamer.dateInscription = new Date(this.newGamer.dateInscription);
  }
    this.gamerService.ajouterGamer(this.newGamer);
    this.newGamer = new Gamer();
    this.router.navigate(['/gamers']);
  }
}