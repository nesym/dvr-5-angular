import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Gamer } from '../model/gamer.model';
import { GamerService } from '../services/gamer.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html'
})
export class ActionsComponent {
  @Input() gamer!: Gamer;

  constructor(private gamerService: GamerService, private router: Router) { }

  modifier() {
    this.router.navigate(['/update-gamer', this.gamer.idGamer]);
  }

  supprimer() {
    if (confirm('Voulez-vous vraiment supprimer ce gamer ?')) {
      this.gamerService.supprimerGamer(this.gamer);
    }
  }
}