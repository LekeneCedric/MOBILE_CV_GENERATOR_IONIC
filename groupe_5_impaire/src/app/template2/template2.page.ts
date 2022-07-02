import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { AvatarService } from '../avatar.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.page.html',
  styleUrls: ['./template2.page.scss'],
})
export class Template2Page implements OnInit {
  @ViewChild('template1') template1: ElementRef;
  elementType = 'url';
  value :string;
  htmlSample:any;
  DownloadPDF(){
    let options = {
      documentSize: 'A4',
      type: 'share'
    }
    this.htmlSample = `<html><head><style>@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    *{
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
    }
    
    body{
      background: #fff;
      font-size: 14px;
      line-height: 20px;
    }
    
    .resume_wrapper{
      display: flex;
      width: 800px;
      margin: 50px auto;
      background: #fff;
      padding: 10px;
    }
    
    .resume_wrapper .resume_left{
      width: 35%;
      background: #26252d;
    }
    
    .resume_wrapper .resume_left .resume_image{
      width: 100%;
    }
    
    .resume_wrapper .resume_left .resume_image img{
      width: 100%;
      display: block;
    }
    
    .resume_wrapper .resume_title{
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 10px;
      letter-spacing: 4px;
    }
    
    .resume_wrapper .resume_left .resume_info{
      color: #84838b;
    }
    
    .resume_wrapper .resume_left .resume_bottom{
      padding: 20px 30px;
    }
    
    .resume_wrapper .resume_item{
      padding: 20px 0;
      border-bottom: 1px solid #0175b2;
    }
    
    .resume_wrapper  .resume_item:last-child{
      border-bottom: 0;
    }
    
    .resume_wrapper .resume_left .resume_namerole{
      display: none;
    }
    
    .resume_wrapper .resume_namerole .name{
      font-size: 20px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 5px;
      letter-spacing: 4px;
    }
    
    .resume_wrapper .resume_left .resume_namerole .role{
      color: #84838b;
    }
    
    .resume_wrapper .resume_left .resume_contact .resume_info:last-child{
       margin-top: 10px;
    }
    
    .resume_wrapper .resume_left .resume_contact .resume_subtitle{
      color: #fff;
      margin-bottom: 2px;
    }
    
    .resume_wrapper .resume_left .resume_skills .skills_list{
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    
    .resume_wrapper .resume_left .resume_skills .skills_list .skills_bar p{
      position: relative;
      width: 125px;
        height: 20px;
        background: #fff;
    }
    
    .resume_wrapper .resume_left .resume_skills .skills_list .skills_bar p span{	
      position: absolute;
      top: 0;
      left: 0;
      background: #0175b2;
      width: 100%;
      height: 100%;
    }
    
    .resume_wrapper .resume_right{
      width: 65%;
      padding: 20px 40px;
      color: #26252d;
    }
    
    .resume_wrapper .resume_right .resume_namerole .name{
      color: #26252d;
      font-size: 32px;
    }
    
    .resume_wrapper .resume_right .resume_namerole .role{
      font-size: 14px;
      text-transform: uppercase;
    }
    
    .resume_wrapper .resume_right .resume_item .resume_title{
      color: #26252d;
    }
    
    .resume_wrapper .resume_right .resume_data{
      display: flex;
    }
    
    .resume_wrapper .resume_right .resume_data .year{
      padding-right: 35px;
      width: 115px;
      position: relative;
    }
    
    .resume_wrapper .resume_right .resume_data .content{
      padding-left: 35px;
      margin-bottom: 20px;
      width: calc(100% - 115px);
    }
    
    .resume_wrapper .resume_right .resume_data .year:before{
      content: "";
      position: absolute;
      top: 5px;
      right: 0;
      width: 10px;
      height: 10px;
      background: #fff;
      border: 1px solid #26252d;
      border-radius: 50%;
    }
    
    .resume_wrapper .resume_right .resume_data .year:after{
      content: "";
        position: absolute;
        top: 17px;
        right: 4px;
        width: 3px;
        height: 90%;
        background: #0175b2;
    }
    
    .resume_wrapper .resume_right .resume_data:last-child .year:after{
      display: none;
    }
    
    .resume_wrapper .resume_right .resmue_interests .resume_info{
      display: flex;
      justify-content: space-between;
      text-align: center;
    }
    
    .resume_wrapper .resume_right .resmue_interests .interests .int_icon{
      font-size: 38px;
      color: #0175b2;
      margin-bottom: 10px;
    }
    
    
    @media screen and (max-width: 800px){
      .resume_wrapper .resume_right .resume_namerole{
        display: none;
      }
      .resume_wrapper .resume_left .resume_namerole{
        display: block;
      }
      .resume_wrapper{
        width: 95%;
        margin: 10px auto;
        flex-direction: column;
      }
      .resume_wrapper .resume_left,
      .resume_wrapper .resume_right{
        width: 100%;
      }
    }
    
    @media screen and (max-width: 424px){
      .resume_wrapper .resume_right{
        padding: 20px 30px;
      }
      .resume_wrapper .resume_right .resume_data{
        flex-direction: column;
      }
      .resume_wrapper .resume_right .resume_data .year{
        padding: 0;
        margin-bottom: 5px;
        width: 100%;
        color: #0175b2;
      }
      .resume_wrapper .resume_right .resume_data .year:before,
      .resume_wrapper .resume_right .resume_data .year:after{
        display: none;
      }
      .resume_wrapper .resume_right .resume_data .content{
        width: 100%;
        padding: 0;
      }
      .resume_wrapper .resume_right .resmue_interests .interests .int_icon{
        font-size: 24px;
      }
    }</style></head><body style="font-family:`+this.font_style+`">`+this.template1.nativeElement.outerHTML+`</body></html>`;
    this.pdfGenerator.fromData(this.htmlSample, options).
      then(resolve => {
        console.log(resolve);
 
      }
      ).catch((err) => {
        console.error(err);
      });
   
  } 
  constructor(private pdfGenerator: PDFGenerator,private data:DataService,private auth:Auth,private avatarService:AvatarService) { 
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile = data;
     })
  }
  profile=null;
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
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

 async  ngOnInit() {
  this.value= this.data.getUserId();
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
  cssSample : string
}
