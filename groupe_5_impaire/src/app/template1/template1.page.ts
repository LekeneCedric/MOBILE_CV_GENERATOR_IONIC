import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Auth } from '@angular/fire/auth/firebase';
import { Firestore } from '@angular/fire/firestore';
import jsPDF from 'jspdf';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { DataService } from '../data.service';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.page.html',
  styleUrls: ['./template1.page.scss'],
})

export class Template1Page implements OnInit {
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

  constructor(private pdfGenerator: PDFGenerator,private data:DataService) { }

  @ViewChild('template1',{static:false}) template1!: ElementRef;

   Template1_PDF(){
     const getDisplay : any = document.querySelector('#template1');

     if(getDisplay.classList != null)
     {
     getDisplay.style.display = "block";

     let pdf = new jsPDF('l','pt','a3');

     pdf.html(this.template1.nativeElement,{
       callback: (pdf)=>{
         
         pdf.save("Template1.pdf");
       }
     });}
   }
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
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
   this.email = String(dat.email)
  })

}
}