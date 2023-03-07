import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoppyRoutingModule } from './loppy-routing.module';
import { LoppyComponent } from './loppy.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoppyComponent
  ],
  imports: [
    CommonModule,
    LoppyRoutingModule,
    SharedModule,
  ]
})
export class LoppyModule { }
