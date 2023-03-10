import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.module').then((m) => m.PlayerModule),
  },
  {
    path: 'ranking',
    loadChildren: () =>
      import('./pages/raking/raking.module').then((m) => m.RakingModule),
  },
  {
    path: 'create-quiz',
    loadChildren: () =>
      import('./pages/create-quiz/create-quiz.module').then(
        (m) => m.CreateQuizModule
      ),
  },
  {
    path: 'marketplace',
    loadChildren: () =>
      import('./pages/marketplace/marketplace.module').then(
        (m) => m.MarketplaceModule
      ),
  },
  {
    path: 'loppy',
    loadChildren: () =>
      import('./pages/loppy/loppy/loppy.module').then((m) => m.LoppyModule),
  },
  {
    path: 'join-quiz',
    loadChildren: () =>
    import('./pages/join-game/join-game.module').then((m) => m.JoinGameModule),
  },
  {
    path: 'username',
    loadChildren: () =>
      import('./pages/username/username.module').then((m) => m.UsernameModule),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./pages/library/library.module').then((m) => m.LibraryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
