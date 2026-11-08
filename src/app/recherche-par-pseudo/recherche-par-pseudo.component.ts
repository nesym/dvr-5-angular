import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gamer } from '../model/gamer.model';
import { GamerService } from '../services/gamer.service';

@Component({
  selector: 'app-recherche-par-pseudo',
  imports: [FormsModule, DatePipe],
  templateUrl: './recherche-par-pseudo.component.html'
})
export class RechercheParPseudoComponent {
  allGamers: Gamer[];
  gamers: Gamer[];

  constructor(private gamerService: GamerService) {
    this.allGamers = gamerService.listeGamers();
    this.gamers = this.allGamers;
  }

  onKeyUp(filterText: string) {
    this.gamers = this.allGamers.filter(item =>
      item.pseudoGamer?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}