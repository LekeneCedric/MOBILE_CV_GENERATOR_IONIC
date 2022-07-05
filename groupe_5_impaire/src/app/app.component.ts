import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth.service';
import { AvatarService } from './avatar.service';
import { DataStatisticService } from './data-statistic.service';
import { DataService } from './data.service';
import { EventsService } from './events.service';
import { TranslateConfigService } from './translate-config.service';

@Component({
  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  countCompte :number;
  countFormation:number;
  countExperience:number;
  countCompetence:number;
  countLanguage:number;
  countHobbie:number;
  profile=null;
  selectedLanguage :string ="fr";
  username: string;
  constructor( private Events:EventsService,
    private router:Router,
    private auth:AuthService,
    private translate :TranslateService,
    private statistic:DataStatisticService) {
    this.translate.setDefaultLang(this.translate.getBrowserLang());
    
     this.Events.subscribe('profil',(data:string)=>{
      this.profile = data;
    });
    this.Events.subscribe('nom',(data:string)=>{
      this.username = data;
     });
     this.Events.subscribe('countCompte',(data:number)=>{
      this.countCompte = data;
     });
     this.Events.subscribe('countFormation',(data:number)=>{
      this.countFormation = data;
     });
     this.Events.subscribe('countExperience',(data:number)=>{
      this.countExperience = data;
     });
     this.Events.subscribe('countCompetence',(data:number)=>{
      this.countCompetence = data;
     });
     this.Events.subscribe('countLanguage',(data:number)=>{
      this.countLanguage = data;
     });
     this.Events.subscribe('countHobbie',(data:number)=>{
      this.countHobbie = data;
     });
  }
  public languageChanged(){
    this.translate.use(this.selectedLanguage);
    this.Events.publish('lang',`${this.selectedLanguage}`);
    // this.TranslateService.setLang(this.selectedLanguage);
    this.ngOnInit();
  }
  ngOnInit(){
    this.statistic.getCountAccount();
    this.statistic.getCountCompetence();
    this.statistic.getCountExperience();
    this.statistic.getCountFormation();
    this.statistic.getCountHobbies();
    this.statistic.getCountInformation();
    this.statistic.getCountLanguage();
  }
  async logout(){
    await this.auth.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }
}

