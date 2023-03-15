import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar-create',
  templateUrl: './nav-bar-create.component.html',
  styleUrls: ['./nav-bar-create.component.scss']
})
export class NavBarCreateComponent {
  constructor(public authService:AuthService){}
}
