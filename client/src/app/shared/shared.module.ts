import { NgModule } from "@angular/core";
import { NarBarComponent } from "../components/nar-bar/nar-bar.component";
import { TaskquizComponent } from "../components/taskquiz/taskquiz.component";
import { TrendingComponent } from "../components/trending/trending.component";

@NgModule({
  declarations: [
    NarBarComponent,
    TaskquizComponent,
    TrendingComponent
  ],
  imports: [
  ],
  providers: [
  ],
  exports: [
    NarBarComponent,
    TaskquizComponent,  
    TrendingComponent
  ]
})
export class SharedModule { }
