import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
