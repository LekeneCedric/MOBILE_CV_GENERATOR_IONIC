import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(
    private translate : TranslateService
  ) { }
  streamLang:BehaviorSubject<string>=new BehaviorSubject<string>(this.translate.getDefaultLang());
  lang:string;
  setLanguage(setLang){
    this.lang = setLang;
    this.streamLang.next(this.lang);  
    
  }
}
