import { NgModule } from "@angular/core";
import { NarBarComponent } from "../components/nar-bar/nar-bar.component";
import { FormsModule } from '@angular/forms';
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
    FormsModule
  ],
  exports: [
    NarBarComponent,
    FormsModule,
    TaskquizComponent,  
    TrendingComponent
  ]
})
export class SharedModule { }
