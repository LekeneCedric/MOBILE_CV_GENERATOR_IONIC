import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';
import { TranslateConfigService } from '../translate-config.service';
import { competence, compte, experience, formation, langue, loisir } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Personal Information 
  name :String ; 
  surname : String ; 
  age:number;
  sex : string;
  contact:String;
  contact2:String;
  email:String;
  email2:String;
  about:String ; 
  profession : String;
  adout:String;
  birthDay:Date;
  birthPlace:Date;
  formations : formation [];
  experiences : experience [];
  competences : competence [];
  langues : langue[];
  comptes: compte [];
  loisirs : loisir [];
  selectedLanguage:string = this.translate.getBrowserLang();
 
accountGet : any[];
formationGet:any[];
experienceGet:any[];
competenceGet:any[];
languageGet:any[];
hobbieGet:any[];

doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    this.ngOnInit();
    event.target.complete();
  }, 1000);
}
constructor(
  private data:DataService,private app:AppComponent,private TranslateService:TranslateConfigService,private translate:TranslateService
)
 {
  
  this.translate.setDefaultLang(this.app.getLang());
    
 }
async ngOnInit() {
  
  
  // console.log(`User connecte id , ${this.auth.currentUser.email} ${this.auth.currentUser.uid}`)
  /*Get Formations From databases */
  const formations = await this.data.get_Formation();
  this.formationGet = formations.data
  console.log(`Formations : ${this.formationGet}`)
  
  /*Get Experiences From databases */
  const experiences = await this.data.get_Experience();
  this.experienceGet = experiences.data
  console.log(`Experiences : ${this.experienceGet}`)
  
  /*Get Competences From databases */
  const competences = await this.data.get_Competences();
  this.competenceGet = competences.data;
  console.log(`Comptences : ${this.competenceGet}`)

  /*Get Language From databases */
  const languages = await this.data.get_Languages();
  this.languageGet = languages.data;
  console.log(`Languages : ${this.languageGet}`)

  /*Get Hobbie From databases */
  const hobbies = await this.data.get_Hobbies();
  this.hobbieGet = hobbies.data;
  console.log(`Hobbies : ${this.hobbieGet}`)
/*Get Accounts from databases */
const account = await this.data.get_Accounts();
this.accountGet = account.data
  // console.log(`First Element is : ${test.data().testArray2[0]}`)
  
  // console.log(`Current User ID : ${this.auth.currentUser.uid}=== current User Email : ${this.auth.currentUser.email}`)
 const dataPersonnel = this.data.get_personalInfo();
 dataPersonnel.then((dat)=>{
   this.name = String(dat.name);
   this.surname = String(dat.surname);
   this.age = Number(dat.age);
   this.sex = dat.sex
   this.about = String (dat.about);
   this.contact = String(dat.contact);
   this.profession = String(dat.profession);
 });
 
}}
