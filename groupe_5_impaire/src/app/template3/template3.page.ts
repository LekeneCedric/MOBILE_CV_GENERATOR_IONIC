import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { AvatarService } from '../avatar.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.page.html',
  styleUrls: ['./template3.page.scss'],
})
export class Template3Page implements OnInit {
  elementType = 'url';
  value :string;
  @ViewChild('template1') template1: ElementRef;
  htmlSample:any;
  DownloadPDF(){
    
    this.htmlSample = `<html><head><style>${this.css}
    </style></head><body style="font-family:`+this.font_style+`>`+this.template1.nativeElement.outerHTML+`</body></html>`;
    
    let options = {
      documentSize: 'A3',
      type: 'share'
    }
    
    this.pdfGenerator.fromData(this.htmlSample, options).
      then(resolve => {
        console.log(resolve);
 
      }
      ).catch((err) => {
        console.error(err);
      });
   
  } 
   profile=null;
  constructor(private pdfGenerator: PDFGenerator,private data:DataService,private avatarService:AvatarService) {
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile = data;
     })
   }
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
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
font_style:string="monospace";
 async  ngOnInit() {
  this.value = this.data.getUserId();
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
css:string=`body{
	margin: 0px;
	padding: 0px;
	background-image: radial-gradient(#ffffff 25%, #ffffff 74%);
	height: 100vh;
	font-family: system-ui;

}
.clearfix{
	clear: both;
}
.main{
	height: auto;
	width: 100%;
	background-color: white;
	box-shadow: 5px 7px 15px 5px #b9b6b6;
	margin: 20px auto;

}

.top-section{
	background-color:#151b29;
	text-align: center;
	padding: 20px;
}
.profile{
	width: 150px;
	border-radius: 50%;
}
.p1{
	color: white;
	font-size: 40px;
	font-weight: bold;
	margin: 0px;
	margin-top: 10px;
}
.p1 span{
	font-weight: 100;
	color: #c7c7c7;
}
.p2{
	font-size: 20px;
	color: #c7c7c7;
	margin: 0px;
	margin-top: 10px;
}
.col-div-4{
	width: 35%;
	float: left;

}
.col-div-8{
	width: 62%;
	float: left;
}
.line{
	border-left: 1px solid #c7c7c7;
  height: 800px;
  width: 2%;
  margin-top: 30px;
  float:left;
}
.content-box{
	padding: 20px;
}
.head{
	font-size: 20px;
	text-transform: uppercase;
	font-weight: 600;
}
.p3{
	color: #7b7b7b;
	margin-bottom: -5px;

}
.fa{
	color: #151b29;
}
.skills{
	margin-left: -20px;
	    margin-bottom: 0px;
}
.skills li{
	padding: 5px;
}
.skills li span{
	color: #7b7b7b;
}
.p-4{
	font-size: 14px;
	color: #7b7b7b;
}`

}
