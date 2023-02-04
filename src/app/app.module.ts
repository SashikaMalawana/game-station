import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { GameService } from './services/game.service';
import { GamesComponent } from './components/games/games.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    UsersComponent,
    GameComponent,
    GamesComponent,
    GameFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
