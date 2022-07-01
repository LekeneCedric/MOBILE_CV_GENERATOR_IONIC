import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth.service';
import { AvatarService } from './avatar.service';
import { DataService } from './data.service';
import { EventsService } from './events.service';
import { TranslateConfigService } from './translate-config.service';

@Component({
  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  profile=null;
  selectedLanguage :string ="fr";
  username: string;
  constructor( private Events:EventsService,private authU:Auth, private avatarService : AvatarService,private router:Router,private auth:AuthService,private data:DataService,private TranslateService:TranslateConfigService,private translate :TranslateService) {
    this.translate.setDefaultLang(this.translate.getBrowserLang());
    
     this.Events.subscribe('profil',(data:string)=>{
      this.profile = data;
    });
    this.Events.subscribe('nom',(data:string)=>{
      this.username = data;
     });
  }
  public languageChanged(){
    this.translate.use(this.selectedLanguage);
    this.Events.publish('lang',`${this.selectedLanguage}`);
    // this.TranslateService.setLang(this.selectedLanguage);
    this.ngOnInit();
  }
  async ngOnInit(){
    console.log(this.authU.currentUser.uid);
  }
  async logout(){
    await this.auth.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }
}

