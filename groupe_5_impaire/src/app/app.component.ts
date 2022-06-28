import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { TranslateConfigService } from './translate-config.service';

@Component({
  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedLanguage:string = this.translate.getBrowserLang();
  public getLang():string{return this.selectedLanguage}
  constructor(private router:Router,private auth:AuthService,private data:DataService,private TranslateService:TranslateConfigService,private translate :TranslateService) {
    
  }
  languageChanged(){
    this.TranslateService.setLanguage(this.selectedLanguage);
  }
    async ngOnInit(){
      
      this.TranslateService.streamLang.subscribe((data)=>{
        this.translate.setDefaultLang(this.selectedLanguage)
        this.selectedLanguage = data;
        window.console.log(data)
      })   
    }
  async logout(){
    await this.auth.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }
}

