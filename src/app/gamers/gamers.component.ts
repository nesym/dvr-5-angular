import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Gamer } from '../model/gamer.model';
import { GamerService } from '../services/gamer.service';
import { AuthService } from '../services/auth.service';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  imports: [DatePipe, ActionsComponent],
  selector: 'app-gamers',
  styleUrl: './gamers.component.css',
  templateUrl: './gamers.component.html',
})
export class GamersComponent {
  gamers: Gamer[];

  constructor(private gamerService: GamerService, public authService: AuthService) {
    this.gamers = gamerService.listeGamers();
  }
}