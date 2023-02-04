import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from '../models/Game';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class GameService {
  gamesUrl: string = 'https://jsonplaceholder.typicode.com/albums';

  constructor(
    private http: HttpClient
  ) { }

  getGames() : Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  saveGame(game: Game): Observable<Game> {
    return this.http.game<Game>(this.gamesUrl, game, httpOptions);
  }

  updateGame(game: Game) :Observable<Game> {
    const url = `${this.gamesUrl}/${game.id}`;

    return this.http.put<Game>(url, game, httpOptions);
  }

  getGame(id: number) :Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;

    return this.http.get<Game>(url);
  }

  removeGame(game: Game | number): Observable<Game> {
    const id = typeof game === 'number' ? game : game.id;
    const url = `${this.gamesUrl}/${id}`;

    return this.http.delete<Game>(url, httpOptions);
  }
}
