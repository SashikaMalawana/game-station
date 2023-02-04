import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';
import { GameService } from '../../services/game.service';

import { Game } from '../../models/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  game: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id).subscribe((game: Game) => this.game = game);
  }
}
