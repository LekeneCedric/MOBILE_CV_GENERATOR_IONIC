import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.page.html',
  styleUrls: ['./experiences.page.scss'],
})
export class ExperiencesPage implements OnInit {
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
  formExperience:boolean=false;
  showAddExperience(){
    this.formExperience = !this.formExperience;
  } 
  constructor(private translate:TranslateService,
    private Events:EventsService,private data:DataService,
    private fb:FormBuilder,
    private toast:ToastController,
    private alertController:AlertController) { 
      this.translate.setDefaultLang(this.translate.getBrowserLang());
    
    
      // Await language modification to change 
    this.Events.subscribe('lang',(data:string)=>{
      this.translate.setDefaultLang(data)
    });
    }

 async ngOnInit() {
   
  const experiences = await this.data.get_Experience();
  this.experienceGet = experiences.data;
  this.experienceId = experiences.id;
  this.experienceCredential = this.fb.group({
    titleExperience:['',[Validators.required,Validators.minLength(8)]],
    structureExperience:['',[Validators.required,Validators.minLength(2)]],
    startDayExperience:['',[Validators.required]],
    endDayExperience:['',[Validators.required]],
    detailExperience:['',[Validators.required]],
    categorieExperience:['',[Validators.required]]
  })
  }
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
  get categorieExperience(){
    return this.experienceCredential.get("categorieExperience");
  }
  
  async addExperience(){
    // console.log(this.ExperienceCredential.value)
    this.data.set_Experience(this.experienceCredential.value)
    // console.log(this.experienceCredential.value)
    this.formExperience = !this.formExperience;
    const toast = this.toast.create({
      message:"Change Successful",
      duration:3000,
      color:"success"
    });
    (await toast).present();
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

}
