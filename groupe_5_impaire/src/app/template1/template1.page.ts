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
  
  @ViewChild('template1',{static:false}) template1!: ElementRef;
   
   htmlSample:any;
   DownloadPDF(){
    //console.log("hey");
    const getDisplay : any = document.querySelector('#template1');
   // console.log(`Native : ${getDisplay}`)
     if(getDisplay.classList != null)
     {
      getDisplay.style.display = "block";
    this.htmlSample = `<html><head><style>${this.cssSample}</style></head><body>`+getDisplay.outerHTML+`</body></html>`;
    console.log(this.htmlSample);
    let options = {
      documentSize: 'A4',
      type: 'share'
    }
    
    this.pdfGenerator.fromData(this.htmlSample, options).
      then(resolve => {
        console.log(resolve);
 
      }
      ).catch((err) => {
        console.error(err);
      });
   }}
  font_style:string="monospace";
  fontChanged(){
    window.console.log(this.font_style)
  }

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
cssSample : string = `@charset "UTF-8";
body {
   font-family: ${this.font_style};
   color: #545E6C;
   background: #f5f5f5;
   font-size: 14px;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
 h1, h2, h3, h4, h5, h6 {
   font-weight: 700;
 }
 
 a {
   color: #2d7788;
   text-decoration: none;
 }
 a:hover {
   text-decoration: underline;
   color: #1a454f;
   -webkit-transition: all 0.4s ease-in-out;
   -moz-transition: all 0.4s ease-in-out;
   -ms-transition: all 0.4s ease-in-out;
   -o-transition: all 0.4s ease-in-out;
 }
 a:focus {
   text-decoration: none;
 }
 
 p {
   line-height: 1.5;
   color:#000
 }
 h3{
     color:#000;
 }
 span{
     color:#000;
 }
 
 .wrapper {
   background: #42A8C0;
   max-width: 960px;
   margin: 0 auto;
   position: relative;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
 }
 
 .sidebar-wrapper {
   background: #42A8C0;
   position: absolute;
   right: 0;
   width: 240px;
   height: 100%;
   min-height: 800px;
   color: #fff;
 }
 .sidebar-wrapper a {
   color: #fff;
 }
 .sidebar-wrapper .profile-container {
   padding: 30px;
   background: rgba(0, 0, 0, 0.2);
   text-align: center;
   color: #fff;
 }
 .sidebar-wrapper .name {
   font-size: 32px;
   font-weight: 900;
   margin-top: 0;
   margin-bottom: 10px;
 }
 .sidebar-wrapper .tagline {
   color: rgba(255, 255, 255, 0.6);
   font-size: 16px;
   font-weight: 400;
   margin-top: 0;
   margin-bottom: 0;
 }
 .sidebar-wrapper .profile {
   margin-bottom: 15px;
 }
 .sidebar-wrapper .contact-list .svg-inline--fa {
   margin-right: 5px;
   font-size: 18px;
   vertical-align: middle;
 }
 .sidebar-wrapper .contact-list li {
   margin-bottom: 15px;
 }
 .sidebar-wrapper .contact-list li:last-child {
   margin-bottom: 0;
 }
 .sidebar-wrapper .contact-list .email .svg-inline--fa {
   font-size: 14px;
 }
 .sidebar-wrapper .container-block {
   padding: 30px;
 }
 .sidebar-wrapper .container-block-title {
   text-transform: uppercase;
   font-size: 16px;
   font-weight: 700;
   margin-top: 0;
   margin-bottom: 15px;
 }
 .sidebar-wrapper .degree {
   font-size: 14px;
   margin-top: 0;
   margin-bottom: 5px;
 }
 .sidebar-wrapper .education-container .item {
   margin-bottom: 15px;
 }
 .sidebar-wrapper .education-container .item:last-child {
   margin-bottom: 0;
 }
 .sidebar-wrapper .education-container .meta {
   color: rgba(255, 255, 255, 0.6);
   font-weight: 500;
   margin-bottom: 0px;
   margin-top: 0;
   font-size: 14px;
 }
 .sidebar-wrapper .education-container .time {
   color: rgba(255, 255, 255, 0.6);
   font-weight: 500;
   margin-bottom: 0px;
 }
 .sidebar-wrapper .languages-container .lang-desc {
   color: rgba(255, 255, 255, 0.6);
 }
 .sidebar-wrapper .languages-list {
   margin-bottom: 0;
 }
 .sidebar-wrapper .languages-list li {
   margin-bottom: 10px;
 }
 .sidebar-wrapper .languages-list li:last-child {
   margin-bottom: 0;
 }
 .sidebar-wrapper .interests-list {
   margin-bottom: 0;
 }
 .sidebar-wrapper .interests-list li {
   margin-bottom: 10px;
 }
 .sidebar-wrapper .interests-list li:last-child {
   margin-bottom: 0;
 }
 
 .main-wrapper {
   background: #fff;
   padding: 60px;
   padding-right: 300px;
 }
 .main-wrapper .section-title {
   text-transform: uppercase;
   font-size: 20px;
   font-weight: 500;
   color: #2d7788;
   position: relative;
   margin-top: 0;
   margin-bottom: 20px;
 }
 .main-wrapper .section-title .icon-holder {
   width: 30px;
   height: 30px;
   margin-right: 8px;
   display: inline-block;
   color: #fff;
   border-radius: 50%;
   -moz-background-clip: padding;
   -webkit-background-clip: padding-box;
   background-clip: padding-box;
   background: #2d7788;
   text-align: center;
   font-size: 16px;
   position: relative;
   top: -8px;
 }
 .main-wrapper .section-title .icon-holder .svg-inline--fa {
   font-size: 14px;
   margin-top: 6px;
 }
 .main-wrapper .section {
   margin-bottom: 60px;
 }
 .main-wrapper .experiences-section .item {
   margin-bottom: 30px;
 }
 .main-wrapper .upper-row {
   position: relative;
   overflow: hidden;
   margin-bottom: 2px;
 }
 .main-wrapper .job-title {
   color: #3F4650;
   font-size: 16px;
   margin-top: 0;
   margin-bottom: 0;
   font-weight: 500;
 }
 .main-wrapper .time {
   position: absolute;
   right: 0;
   top: 0;
   color: #97AAC3;
 }
 .main-wrapper .company {
   margin-bottom: 10px;
   color: #97AAC3;
 }
 .main-wrapper .project-title {
   font-size: 16px;
   font-weight: 400;
   margin-top: 0;
   margin-bottom: 5px;
 }
 .main-wrapper .projects-section .intro {
   margin-bottom: 30px;
 }
 .main-wrapper .projects-section .item {
   margin-bottom: 15px;
 }
 
 .skillset .item {
   margin-bottom: 15px;
   overflow: hidden;
 }
 .skillset .level-title {
   font-size: 14px;
   margin-top: 0;
   margin-bottom: 12px;
 }
 .skillset .level-bar {
   height: 12px;
   background: #f5f5f5;
   border-radius: 2px;
   -moz-background-clip: padding;
   -webkit-background-clip: padding-box;
   background-clip: padding-box;
 }
 .skillset .theme-progress-bar {
   background: #68bacd;
 }
 
 .footer {
   padding: 30px;
   padding-top: 60px;
 }
 .footer .copyright {
   line-height: 1.6;
   color: #545E6C;
   font-size: 13px;
 }
 .footer .fa-heart {
   color: #fb866a;
 }
 
 @media (max-width: 767.98px) {
   .sidebar-wrapper {
     position: static;
     width: inherit;
   }
 
   .main-wrapper {
     padding: 30px;
   }
 
   .main-wrapper .time {
     position: static;
     display: block;
     margin-top: 5px;
   }
 
   .main-wrapper .upper-row {
     margin-bottom: 0;
   }
 }
 @media (min-width: 992px) {
   .skillset .level-title {
     display: inline-block;
     float: left;
     width: 30%;
     margin-bottom: 0;
   }
 }`
}