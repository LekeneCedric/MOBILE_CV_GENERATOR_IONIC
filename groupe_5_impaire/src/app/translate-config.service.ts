import { Injectable, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class TranslateConfigService implements OnInit{

  constructor(
    private translate : TranslateService
  ) { 
    
  }
  
  currentLang : string = this.translate.getBrowserLang();
  setLang(lang){
  this.currentLang = lang;
  this.ngOnInit()
  }
  getLang(){
    return this.currentLang;
    
  }
  async ngOnInit(): Promise<void> {
    
  }
  // streamLang:BehaviorSubject<string>=new BehaviorSubject<string>(this.translate.getBrowserLang());
  // lang:string;
  // setLanguage(setLang){
  //   this.lang = setLang;
  //   this.streamLang.next(this.lang);  
  //   this.translate.setDefaultLang(setLang);
    
  // }
  // getLanguage(){
  //   return this.streamLang.value;
  // }
}
