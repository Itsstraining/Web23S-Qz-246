import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RakingComponent } from './raking.component';

const routes: Routes = [{ path: '', component: RakingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RakingRoutingModule { }
