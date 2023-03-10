import { NgModule } from "@angular/core";
import { NarBarComponent } from "../components/nar-bar/nar-bar.component";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NarBarComponent,
  ],
  imports: [
  ],
  providers: [
    FormsModule
  ],
  exports: [
    NarBarComponent,
    FormsModule
  ]
})
export class SharedModule { }
