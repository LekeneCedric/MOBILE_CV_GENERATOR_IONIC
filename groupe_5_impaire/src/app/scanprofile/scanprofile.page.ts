import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TranslateService } from '@ngx-translate/core';
import { AvatarService } from '../avatar.service';
import { DataqrcodeService } from '../dataqrcode.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-scanprofile',
  templateUrl: './scanprofile.page.html',
  styleUrls: ['./scanprofile.page.scss'],
})
export class ScanprofilePage implements OnInit {
  
  // QrCode variable
  elementType = 'url';
  value = '7u2KpBxAichTM4X3wheNyTIkNny1';
  result : number = 0;
  isScanned:boolean = false;
  // 
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

 
accountGet : any[];
formationGet:any[];
experienceGet:any[];
competenceGet:any[];
languageGet:any[];
hobbieGet:any[];
profile=null;

doRefresh(event) {
  
  console.log('Begin async operation');

  setTimeout(() => {
    this.ngOnInit();
    event.target.complete();
  }, 1000);
}
scanCode(){
  this.barcodeScanner.scan().then(data=>{
    this.result +=1
    if(this.isScanned==false)
    {
      this.isScanned = !this.isScanned;
      this.Events.publish('scan',data.text);
    }
    else{

    }
  })
}

constructor( private data:DataqrcodeService,
             private Events:EventsService,
             private translate:TranslateService,
             private barcodeScanner:BarcodeScanner,
             private avatarService:AvatarService
            ) { 
  
  this.Events.subscribe('lang',(data:string)=>{
    this.translate.setDefaultLang(data)
  })
  this.Events.subscribe('scan',async (data)=>{
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile = data;
      this.Events.publish('profil',data);
     })
    const id :string = data;
    const formations = await this.data.get_Formation(id);
    this.formationGet = formations.data
    console.log(`Formations : ${this.formationGet}`)
    
    /*Get Experiences From databases */
    const experiences = await this.data.get_Experience(id);
    this.experienceGet = experiences.data
    console.log(`Experiences : ${this.experienceGet}`)
    
    /*Get Competences From databases */
    const competences = await this.data.get_Competences(id);
    this.competenceGet = competences.data;
    console.log(`Comptences : ${this.competenceGet}`)
  
    /*Get Language From databases */
    const languages = await this.data.get_Languages(id);
    this.languageGet = languages.data;
    console.log(`Languages : ${this.languageGet}`)
  
    /*Get Hobbie From databases */
    const hobbies = await this.data.get_Hobbies(id);
    this.hobbieGet = hobbies.data;
    console.log(`Hobbies : ${this.hobbieGet}`)
  /*Get Accounts from databases */
  const account = await this.data.get_Accounts(id);
  this.accountGet = account.data
    // console.log(`First Element is : ${test.data().testArray2[0]}`)
    
    // console.log(`Current User ID : ${this.auth.currentUser.uid}=== current User Email : ${this.auth.currentUser.email}`)
   const dataPersonnel = this.data.get_personalInfo(id);
   dataPersonnel.then((dat)=>{
     this.name = String(dat.name);
     this.surname = String(dat.surname);
     this.age = Number(dat.age);
     this.sex = dat.sex
     this.about = String (dat.about);
     this.contact = String(dat.contact);
     this.profession = String(dat.profession);
   });
    
  })
  
}
  async ngOnInit() {
    this.isScanned = false;
    }
    

}
