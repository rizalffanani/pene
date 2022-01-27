import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  login: boolean;
  constructor(
    private auth: AuthService,
  ){
    this.auth.getToken();
  }

  async ionViewWillEnter(){  
    this.login = this.auth.isLoggedIn; 
  }

}
