import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceComponent } from './marketplace.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    SharedModule
  ]
})
export class MarketplaceModule { }
