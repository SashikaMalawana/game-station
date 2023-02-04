import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

import { Game } from '../../models/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {
  games!: Game[];
  currentGame: Game = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {  
    this.gameService.getGames().subscribe((games: Game[]) => {
      this.games = games;
    });
  }

  onNewGame(game: Game) {
    this.games.unshift(game);
  }

  editGame(game: Game) {
    this.currentGame = game;
    this.isEdit = true;
  }

  onUpdatedGame(game: Game) {
    this.games.forEach((cur, index) => {
      if(game.id === cur.id) {
        this.games.splice(index, 1);
        this.games.unshift(game);
        this.isEdit = false;
        this.currentGame = {
          id: 0,
          title: '',
          body: ''
        }
      }
    });
  }

  removeGame(game: Game) {
    if(confirm('Are You Sure?')) {
      this.gameService.removeGame(game.id).subscribe(() => {
        this.games.forEach((cur, index) => {
          if(game.id === cur.id) {
            this.games.splice(index, 1);  
          }
        });
      });
    }
  }

}
