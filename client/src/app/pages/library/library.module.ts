import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import {MatIconModule} from '@angular/material/icon'
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    LibraryRoutingModule,
    SharedModule
  ]
})
export class LibraryModule { }
