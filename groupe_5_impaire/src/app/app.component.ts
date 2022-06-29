import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth.service';
import { AvatarService } from './avatar.service';
import { DataService } from './data.service';
import { TranslateConfigService } from './translate-config.service';
@Component({
  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  profile=null;
  selectedLanguage :string ="fr";
  constructor( private avatarService : AvatarService,private router:Router,private auth:AuthService,private data:DataService,private TranslateService:TranslateConfigService,private translate :TranslateService) {
    // this.avatarService.getUserProfile().subscribe((data)=>{
    //   this.profile = data;
    //  })
  }
  public languageChanged(){
    this.translate.use(this.selectedLanguage);
    // this.TranslateService.setLang(this.selectedLanguage);
    this.ngOnInit()
  }
  async ngOnInit(){
    this.translate.setDefaultLang (this.TranslateService.getLang());
  }
  async logout(){
    await this.auth.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }
}

