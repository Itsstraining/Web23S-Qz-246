import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-nar-bar',
  templateUrl: './nar-bar.component.html',
  styleUrls: ['./nar-bar.component.scss']
})
export class NarBarComponent {
  constructor(public auth:Auth, public nav:NavBarService, public authService: AuthService){}
  
  ngOnInit(){
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log('user signed in');
        this.authService.userInfo = {
          userid: user?.uid as string,
          displayName: user?.displayName as string,
          email: user?.email as string,
          photoURL: user?.photoURL as string
        };
      } else {
        console.log('user signed out');
        this.authService.userInfo = null;
      }
    });
  }

}
