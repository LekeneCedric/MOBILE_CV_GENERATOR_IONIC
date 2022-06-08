import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  async addCompetence(){
    this.formCompetence = !this.formCompetence
  }

  formLanguage:boolean=false;
  showAddLanguage(){
    this.formLanguage = !this.formLanguage
  } 
  async addLanguage(){
    this.formLanguage = !this.formLanguage
  }

  formHobbie:boolean=false;
  showAddHobbie(){
    this.formHobbie = !this.formHobbie
  } 
  async addHobbie(){
    this.formHobbie = !this.formHobbie
  }

  formAccount:boolean=false;
  showAddAccount(){
    this.formAccount = !this.formAccount
  } 

  
  constructor(
    private data:DataService,
    private auth:Auth,
    private fb:FormBuilder
  )
   {}
  async ngOnInit() { 
  // console.log(`Current User ID : ${this.auth.currentUser.uid}=== current User Email : ${this.auth.currentUser.email}`)
  /* Get Personnal Information from databases */
  const dataPersonnel = this.data.get_personalInfo();

  /*Get Accounts from databases */
  const account = await this.data.get_Accounts();
  this.accountGet = account
  dataPersonnel.then((dat)=>{
    this.name = String(dat.name);
    this.surname = String(dat.surname);
    this.about = String (dat.about);
    this.profession = String(dat.profession);
  });

  /*Get Formations From databases */
  const formations = await this.data.get_Formation();
  this.formationGet = formations
  console.log(`Formations : ${this.formationGet}`)
  
  /*Get Experiences From databases */
  const experiences = await this.data.get_Experience();
  this.experienceGet = experiences
  console.log(`Experiences : ${this.experienceGet}`)


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
  }
 // Formation Getter Value / Add Function
  accountGet : any[];
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
  // Formation Getter Value / Add Function
  
  formationGet : any[]
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
    
    this.formFormation = !this.formFormation
  }

  // Experience Getter Value / Add Function
  experienceGet : any[]
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
    // this.data.set_Experience(this.experienceCredential.value)
    console.log(this.experienceCredential.value)
    this.formFormation = !this.formFormation
  }

}
