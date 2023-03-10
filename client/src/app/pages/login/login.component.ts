import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as UserActions from '../../ngrx/actions/user.action';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public userService:AuthService){}

}
