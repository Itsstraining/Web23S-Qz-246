import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionAdComponent } from './question-ad.component';

const routes: Routes = [{ path: '', component: QuestionAdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionAdRoutingModule { }
