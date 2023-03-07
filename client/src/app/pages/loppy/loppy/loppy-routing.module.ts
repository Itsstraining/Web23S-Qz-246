import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoppyComponent } from './loppy.component';

const routes: Routes = [{ path: '', component: LoppyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoppyRoutingModule { }
