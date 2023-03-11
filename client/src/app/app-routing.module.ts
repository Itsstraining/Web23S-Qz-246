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
    path: 'raking',
    loadChildren: () =>
      import('./pages/raking/raking.module').then((m) => m.RakingModule),
  },
  {
    path: 'create-quiz',
    // canActivate: [AuthGuard],
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

    loadChildren: () =>
      import('./pages/loppy/loppy/loppy.module').then((m) => m.LoppyModule),
  },
  { path: 'slideshow', loadChildren: () => import('./pages/slideshow/slideshow.module').then(m => m.SlideshowModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
