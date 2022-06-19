import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { TranslateConfigService } from './translate-config.service';

@Component({
  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedLanguage:string;
  constructor(private router:Router,private auth:AuthService,private data:DataService,private translateConfigService: TranslateConfigService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
    async ngOnInit(){
    }
  async logout(){
    await this.auth.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }
}
