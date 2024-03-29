import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {
  name :String ; 
  surname : String ; 
  about:String ; 
  profession : String;

  formExperience:boolean=false;
  showAddExperience(){
    this.formExperience = !this.formExperience
  } 

  formFormation:boolean=false;
  showAddFormation(){
    this.formFormation = !this.formFormation
  }
  formCompetence:boolean=false;
  showAddCompetence(){
    this.formCompetence = !this.formCompetence
  } 

  formLanguage:boolean=false;
  showAddLanguage(){
    this.formLanguage = !this.formLanguage
  } 

  formHobbie:boolean=false;
  showAddHobbie(){
    this.formHobbie = !this.formHobbie
  } 
  formAccount:boolean=false;
  showAddAccount(){
    this.formAccount = !this.formAccount
  } 

  
  constructor(
    private data:DataService,
    private fb:FormBuilder,
    public alertController :AlertController
  )
   {}
   doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
  async ngOnInit() { 
  // console.log(`Current User ID : ${this.auth.currentUser.uid}=== current User Email : ${this.auth.currentUser.email}`)
  /* Get Personnal Information from databases */
  const dataPersonnel = this.data.get_personalInfo();

  /*Get Accounts from databases */
  const account = await this.data.get_Accounts();
  this.accountGet = account.data
  this.accountId = account.id;
  dataPersonnel.then((dat)=>{
    console.log(dat.id);
    this.name = String(dat.name);
    this.surname = String(dat.surname);
    this.about = String (dat.about);
    this.profession = String(dat.profession);
  });

  /*Get Formations From databases */
  const formations = await this.data.get_Formation();
  this.formationGet = formations.data;
  this.formationId = formations.id;
  console.log(`Formations : ${this.formationGet}`)
  
  /*Get Experiences From databases */
  const experiences = await this.data.get_Experience();
  this.experienceGet = experiences.data;
  this.experienceId = experiences.id;
  console.log(`Experiences : ${this.experienceGet}`)
  
  /*Get Competences From databases */
  const competences = await this.data.get_Competences();
  this.competenceGet = competences.data;
  this.competenceId = competences.id;
  console.log(`Comptences : ${this.competenceGet}`)

  /*Get Language From databases */
  const languages = await this.data.get_Languages();
  this.languageGet = languages.data;
  this.languageId = languages.id

  console.log(`Languages : ${this.languageGet}`)

  /*Get Hobbie From databases */
  const hobbies = await this.data.get_Hobbies();
  this.hobbieGet = hobbies.data;
  this.hobbieId  = hobbies.id
  console.log(`Hobbies : ${this.hobbieGet}`)




  // accountCredentialValidator
  this.accountCredential = this.fb.group({
    accountName:['',[Validators.required,Validators.maxLength(15)]],
    accountLink:['',[Validators.required,Validators.maxLength(35)]]
  })
  // FormationCredentialValidator
  this.formationCredential = this.fb.group({
    titleFormation:['',[Validators.required,Validators.minLength(8)]],
    schoolFormation:['',[Validators.required,Validators.minLength(2)]],
    startDayFormation:['',[Validators.required]],
    endDayFormation:['',[Validators.required]],
    detailFormation:['',[Validators.required]]
  })
  // ExperienceCredentialValidator
  this.experienceCredential = this.fb.group({
    titleExperience:['',[Validators.required,Validators.minLength(8)]],
    structureExperience:['',[Validators.required,Validators.minLength(2)]],
    startDayExperience:['',[Validators.required]],
    endDayExperience:['',[Validators.required]],
    detailExperience:['',[Validators.required]]
  })
  // CompetenceCredentialValidator
  this.competenceCredential = this.fb.group({
    nameCompetence:['',[Validators.required,Validators.minLength(1)]],
    levelCompetence:['',[Validators.required]]
  })
  // LanguageCredentialValidator
  this.languageCredential = this.fb.group({
    nameLanguage:['',[Validators.required,Validators.minLength(1)]],
    levelLanguage:['',[Validators.required]]
  })
  // HobbieCredentialValidator
  this.hobbieCredential = this.fb.group({
    nameHobbie:['',[Validators.required]]
  })
  }
 // Formation Getter Value / Add Function / Remove Function
  accountGet : any[];
  accountId : any[];
  accountCredential : FormGroup;
  get accountName (){
    return this.accountCredential.get('accountName');
  }
  
  get accountLink(){
    return this.accountCredential.get('accountLink');
  }
  async addAccount(){
    this.data.set_Account(this.accountCredential.value)
    this.formAccount = !this.formAccount;
    this.data.get_Accounts()
  }

  async deleteAccount(id:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Account !',
      message: 'would you want to delete <strong>Account</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          id: 'confirm-button',
          handler: async () =>  {
         await this.data.del_Account(id);    
          this.ngOnInit()
          }
        }
      ]
    });

    await alert.present();
  }
  // Formation Getter Value / Add Function
  
  formationGet : any[];
  formationId : any [];
  formationCredential:FormGroup;

  get titleFormation(){
    return this.formationCredential.get("titleFormation");
  }
  get schoolFormation(){
    return this.formationCredential.get("schoolFormation");
  }
  get startDayFormation(){
    return this.formationCredential.get("startDayFormation");
  }
  get endDayFormation(){
    return this.formationCredential.get("endDayFormation");
  }
  get detailFormation(){
    return this.formationCredential.get("detailFormation");
  }
  async addFormation(){
    // console.log(this.formationCredential.value)
    this.data.set_Formation(this.formationCredential.value)
    
    this.formFormation = !this.formFormation;
    this.ngOnInit()
  }
  async deleteFormation(id:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Formation !',
      message: 'would you want to delete <strong>Formation</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          id: 'confirm-button',
          handler: async () =>  {
         await this.data.del_Formation(id);    
          this.ngOnInit()
          }
        }
      ]
    });

    await alert.present();
  }

  // Experience Getter Value / Add Function
  experienceGet : any[];
  experienceId : any [];
  experienceCredential:FormGroup;

  get titleExperience(){
    return this.experienceCredential.get("titleExperience");
  }
  get structureExperience(){
    return this.experienceCredential.get("structureExperience");
  }
  get startDayExperience(){
    return this.experienceCredential.get("startDayExperience");
  }
  get endDayExperience(){
    return this.experienceCredential.get("endDayExperience");
  }
  get detailExperience(){
    return this.experienceCredential.get("detailExperience");
  }
  async addExperience(){
    // console.log(this.ExperienceCredential.value)
    this.data.set_Experience(this.experienceCredential.value)
    // console.log(this.experienceCredential.value)
    this.formExperience = !this.formExperience;
    this.ngOnInit()
  }
  async deleteExperience(id:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Experience !',
      message: 'would you want to delete <strong>Experience</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          id: 'confirm-button',
          handler: async () =>  {
         await this.data.del_Experience(id);    
          this.ngOnInit()
          }
        }
      ]
    });

    await alert.present();
  }
// Competence Getter Value / Add Function 
  competenceGet: any[];
  competenceId : any []
  competenceCredential:FormGroup;

  get nameCompetence(){
    return this.competenceCredential.get("nameCompetence");
  }

  get levelCompetence(){
    return this.competenceCredential.get("levelCompetence");
  }
  async addCompetence(){
    this.data.set_Competence(this.competenceCredential.value);
    console.log("Competence hass been added ");
    this.formCompetence = !this.formCompetence;
    this.ngOnInit()
  }
  async deleteCompetence(id:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Competence !',
      message: 'would you want to delete <strong>Competence</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          id: 'confirm-button',
          handler: async () =>  {
         await this.data.del_Competence(id);    
          this.ngOnInit()
          }
        }
      ]
    });

    await alert.present();
  }

  // Language Getter Value  / Add Function 
  languageGet:any[];
  languageId :any[];
  languageCredential:FormGroup;

  get nameLanguage(){
    return this.languageCredential.get("nameLanguage");
  }
  get levelLanguage(){
    return this.languageCredential.get("levelLanguage");
  }
  async addLanguage()
  {
    this.data.set_Language(this.languageCredential.value);
    console.log(this.languageCredential.value);
    this.formLanguage = !this.formLanguage;
    this.ngOnInit()
  }
  async deleteLanguage(id:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Language !',
      message: 'would you want to delete <strong>Language</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          id: 'confirm-button',
          handler: async () =>  {
         await this.data.del_Language(id);    
          this.ngOnInit()
          }
        }
      ]
    });

    await alert.present();
  }

  // Hobbie Getter Value / Add Function
  
  hobbieGet:any[];
  hobbieId:any[]
  hobbieCredential:FormGroup;

  get nameHobbie(){
    return this.hobbieCredential.get("nameHobbie")
  }
  async addHobbie(){
    this.data.set_Hobbies(this.hobbieCredential.value);
    this.formHobbie = !this.formHobbie;
    console.log("Hobbie added successfully");
  };
  async deleteHobbie(id:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Hobbie !',
      message: 'would you want to delete <strong>Hobbie</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          id: 'confirm-button',
          handler: async () =>  {
         await this.data.del_Hobbies(id);    
          this.ngOnInit()
          }
        }
      ]
    });

    await alert.present();
  }

}
