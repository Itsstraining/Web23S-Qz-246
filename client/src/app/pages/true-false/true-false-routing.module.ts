import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrueFalseComponent } from './true-false.component';

const routes: Routes = [{ path: '', component: TrueFalseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrueFalseRoutingModule { }
