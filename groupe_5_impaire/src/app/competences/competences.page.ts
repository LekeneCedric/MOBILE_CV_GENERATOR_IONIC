import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.page.html',
  styleUrls: ['./competences.page.scss'],
})
export class CompetencesPage implements OnInit {
  nbreCompetences:number;
  formCompetence:boolean=false;
  showAddCompetence(){
    this.formCompetence = !this.formCompetence;
  } 

  constructor(private translate:TranslateService,
    private Events:EventsService,
    private data:DataService,private fb:FormBuilder,
    private toast:ToastController,
    private event:EventsService,
    private alertController:AlertController) { 
    this.translate.setDefaultLang(this.translate.getBrowserLang());
    
    
    // Await language modification to change 
  this.Events.subscribe('lang',(data:string)=>{
    this.translate.setDefaultLang(data)
  });
  }
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
 async ngOnInit() {
   /*Get Competences From databases */
   const competences = await this.data.get_Competences();
   this.competenceGet = competences.data;
   this.nbreCompetences = this.competenceGet.length;
   this.Events.publish('nbreCompetences',this.nbreCompetences);
   this.competenceId = competences.id;
   this.competenceCredential = this.fb.group({
    nameCompetence:['',[Validators.required,Validators.minLength(1)]],
    levelCompetence:['',[Validators.required]],
    categorieCompetence:['',[Validators.required]]
  })
  }
  competenceGet: any[];
  competenceId : any []
  competenceCredential:FormGroup;

  get nameCompetence(){
    return this.competenceCredential.get("nameCompetence");
  }

  get levelCompetence(){
    return this.competenceCredential.get("levelCompetence");
  }
  get categorieCompetence(){
    return this.competenceCredential.get("levelCompetence");
  }
  async addCompetence(){
    this.data.set_Competence(this.competenceCredential.value);
    console.log("Competence hass been added ");
    this.formCompetence = !this.formCompetence;
    const toast = this.toast.create({
      message:"Change Successful",
      duration:3000,
      color:"success"
    });
    (await toast).present();
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

}
