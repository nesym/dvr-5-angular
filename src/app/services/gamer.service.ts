import { Injectable } from '@angular/core';
import { Gamer } from '../model/gamer.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GamerService {
  gamers: Gamer[];
  genres: Genre[];

  constructor() {
    this.genres = [
      { idGenre: 1, nomGenre: "FPS" },
      { idGenre: 2, nomGenre: "RPG" },
      { idGenre: 3, nomGenre: "Sport" },
      { idGenre: 4, nomGenre: "Stratégie" }
    ];

    this.gamers = [
      { idGamer: 1, pseudoGamer: "ShadowWolf", scoreGamer: 15200.5, dateInscription: new Date("2021-03-14"), genre: this.genres[0] },
      { idGamer: 2, pseudoGamer: "QueenOfPixels", scoreGamer: 830, dateInscription: new Date("2022-07-02"), genre: this.genres[1] },
      { idGamer: 3, pseudoGamer: "mohsen589", scoreGamer: 99999, dateInscription: new Date("2020-11-20"), genre: this.genres[2] }
    ];
  }

  listeGamers(): Gamer[] {
    return this.gamers;
  }

  ajouterGamer(gam: Gamer) {
    this.gamers.push(gam);
  }

  listeGenres(): Genre[] {
    return this.genres;
  }

  consulterGenre(id: number): Genre {
    return this.genres.find(g => g.idGenre === id)!;
  }

  consulterGamer(id: number): Gamer {
    return this.gamers.find(g => g.idGamer === id)!;
  }

  supprimerGamer(gam: Gamer) {
    const index = this.gamers.indexOf(gam);
    if (index > -1) {
      this.gamers.splice(index, 1);
    }
  }

  updateGamer(gam: Gamer) {
    const index = this.gamers.findIndex(g => g.idGamer === gam.idGamer);
    if (index > -1) {
      this.gamers[index] = gam;
    }
  }
  rechercherParGenre(idGenre: number): Gamer[] {
  return this.gamers.filter(g => g.genre?.idGenre === idGenre);
}
}
