import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router , private auth:AuthService,private loadingController:LoadingController
    ,private alertController:AlertController) {}
  async logout(){
    await this.auth.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }
}
