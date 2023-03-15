import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'player',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/player/player.module').then((m) => m.PlayerModule),
  },
  {
    path: 'ranking',
    loadChildren: () =>
      import('./pages/ranking/ranking.module').then((m) => m.RankingModule),
  },
  {
    path: 'create-quiz',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/create-quiz/create-quiz.module').then(
        (m) => m.CreateQuizModule
      ),
  },
  {
    path: 'marketplace',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/marketplace/marketplace.module').then(
        (m) => m.MarketplaceModule
      ),
  },
  {
    path: 'loppy',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/loppy/loppy/loppy.module').then((m) => m.LoppyModule),
  },

  { path: 'slideshow', loadChildren: () => import('./pages/slideshow/slideshow.module').then(m => m.SlideshowModule) },

  {
    path: 'join-game',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./pages/join-game/join-game.module').then((m) => m.JoinGameModule),
  },
  {
    path: 'library',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/library/library.module').then((m) => m.LibraryModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'host'  ,  canActivate: [AuthGuard], loadChildren: () => import('./pages/host/host.module').then(m => m.HostModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
