import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Gamer } from '../model/gamer.model';
import { Genre } from '../model/genre.model';
import { GamerService } from '../services/gamer.service';

@Component({
  selector: 'app-update-gamer',
  imports: [FormsModule, RouterLink],
  templateUrl: './update-gamer.component.html'
})
export class UpdateGamerComponent implements OnInit {
  currentGamer = new Gamer();
  genres: Genre[];
  updatedIdGenre!: number;
  dateStr = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private gamerService: GamerService
  ) {
    this.genres = gamerService.listeGenres();
  }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.currentGamer = { ...this.gamerService.consulterGamer(id) };
    this.updatedIdGenre = this.currentGamer.genre?.idGenre!;
    if (this.currentGamer.dateInscription) {
      this.dateStr = new Date(this.currentGamer.dateInscription).toISOString().slice(0, 10);
    }
  }

  updateGamer() {
    this.currentGamer.genre = this.gamerService.consulterGenre(this.updatedIdGenre);
    if (this.dateStr) {
      this.currentGamer.dateInscription = new Date(this.dateStr);
    }
    this.gamerService.updateGamer(this.currentGamer);
    this.router.navigate(['/gamers']);
  }
}