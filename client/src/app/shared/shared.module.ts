import { NgModule } from "@angular/core";
import { NarBarComponent } from "../components/nar-bar/nar-bar.component";
import { TaskquizComponent } from "../components/taskquiz/taskquiz.component";
import { TrendingComponent } from "../components/trending/trending.component";
import { NavBarCreateComponent } from "../components/nav-bar-create/nav-bar-create.component";


@NgModule({
  declarations: [
    NarBarComponent,
    TaskquizComponent,
    TrendingComponent,
    NavBarCreateComponent,
  ],
  imports: [
  ],
  providers: [
  ],
  exports: [
    NarBarComponent,
    TaskquizComponent,  
    TrendingComponent,
    NavBarCreateComponent,
  ]
})
export class SharedModule { }
