import { Component } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth/auth.service';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css']
})
export class SidenavBarComponent {

  constructor(private authService : AuthService){}

  logout() {
    // Remove logged-in user from local storage
    this.authService.logout();
  }
}
