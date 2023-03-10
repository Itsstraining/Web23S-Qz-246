import { NgModule } from "@angular/core";
import { NarBarComponent } from "../components/nar-bar/nar-bar.component";
import { TaskquizComponent } from "../components/taskquiz/taskquiz.component";
import { TrendingComponent } from "../components/trending/trending.component";
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    NarBarComponent,
    TaskquizComponent,
    TrendingComponent
  ],
  imports: [
    MatMenuModule,
    MatExpansionModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [
  ],
  exports: [
    NarBarComponent,
    TaskquizComponent,  
    TrendingComponent,
    MatMenuModule,
    MatExpansionModule,
    MatSliderModule,
    MatButtonModule
  ]
})
export class SharedModule { }
