import { NgModule } from "@angular/core";
import { NarBarComponent } from "../components/nar-bar/nar-bar.component";
import { TaskquizComponent } from "../components/taskquiz/taskquiz.component";
import { TrendingComponent } from "../components/trending/trending.component";
import { CommonModule } from '@angular/common';  
@NgModule({
  declarations: [
    NarBarComponent,
    TaskquizComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    NarBarComponent,
    TaskquizComponent,  
    TrendingComponent,
    CommonModule
  ]
})
export class SharedModule { }
