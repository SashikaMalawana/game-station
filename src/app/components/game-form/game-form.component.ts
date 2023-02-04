import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { GameService } from '../../services/game.service';

import { Game } from '../../models/Game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class GameFormComponent implements OnInit {
  @Output() newGame: EventEmitter<Game> = new EventEmitter();
  @Output() updatedGame: EventEmitter<Game> = new EventEmitter();
  @Input()
  currentGame!: Game;
  @Input()
  isEdit!: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  addGame(title: any, body: any) {
    if(!title || !body) {
      alert('Please add game');
    } else {
      this.gameService.saveGame({title, body} as Game).subscribe((game: Game | undefined) => {
        this.newGame.emit(game);
      });
    }
  }

  updateGame() {
    this.gameService.updateGame(this.currentGame).subscribe((game: Game | undefined) => {
      console.log(game);
      this.isEdit = false;
      this.updatedGame.emit(game);
    });
  }

}
