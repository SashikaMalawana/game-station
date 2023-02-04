import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { UsersComponent } from './components/users/users.component';

import { GamesComponent } from './components/games/games.component';

import { GameComponent } from './components/game/game.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'games', component: GamesComponent},
  {path: 'game/:id', component: GameComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
