import { NgModule } from "@angular/core";
import { NarBarComponent } from "../components/nar-bar/nar-bar.component";
import { FormsModule } from '@angular/forms';
import { TaskquizComponent } from "../components/taskquiz/taskquiz.component";
import { TrendingComponent } from "../components/trending/trending.component";
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { JoinGameModule } from "../pages/join-game/join-game.module";
import { CommonModule } from "@angular/common";
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    NarBarComponent,
    TaskquizComponent,
    TrendingComponent,
  ],
  imports: [
    MatMenuModule,
    MatExpansionModule,
    MatSliderModule,
    MatButtonModule,
    CommonModule,
    MatTooltipModule
  ],
  providers: [
    FormsModule
  ],
  exports: [
    NarBarComponent,
    FormsModule,
    TaskquizComponent,
    TrendingComponent,
    MatMenuModule,
    MatExpansionModule,
    MatSliderModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
