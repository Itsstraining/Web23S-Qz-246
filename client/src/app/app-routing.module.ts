import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'player', loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerModule) }, { path: 'raking', loadChildren: () => import('./pages/raking/raking.module').then(m => m.RakingModule) }, { path: 'create-quiz', loadChildren: () => import('./pages/create-quiz/create-quiz.module').then(m => m.CreateQuizModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
