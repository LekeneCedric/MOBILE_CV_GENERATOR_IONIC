import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { TranslateConfigService } from '../translate-config.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [HomePage],providers:[TranslateConfigService]
})
export class HomePageModule {}

export class compte{
  public name : String ;
  public link : String ; 
  constructor(name , link){
    this.name = name ; 
    this.link = link 
  }
}

export class formation {
  public title : String ; 
  public school : String ; 
  public startDay : Date ;
  public endDay : Date ;
  constructor(title , school , startDay , endDay)
  {
    this.title = title ; 
    this.school = school ; 
    this.startDay = startDay ; 
    this.endDay = endDay;
  }  
}

export class experience {
  public title : String ; 
  public entreprise : String ; 
  public startDay : Date ;
  public endDay : Date ; 
  constructor(title , entreprise , startDay , endDay){
    this.title = title ; 
    this.entreprise = entreprise;
    this.startDay = startDay;
    this.endDay = endDay;
  }
}

export class competence{
  public name : String ; 
  public level : number; 
  constructor(name , level){
    this.name = name ; 
    this.level = level;
  }
}

export class langue { 
  public name :String ; 
  public level : number ;
  constructor(name , level){
    this.name = name ; 
    this.level = level
  }
}
export class loisir{
  public name :String ;
  constructor(name){
    this.name = name ;
  }
}