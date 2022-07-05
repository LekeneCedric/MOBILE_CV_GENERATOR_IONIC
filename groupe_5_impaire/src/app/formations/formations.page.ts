import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {
  
  formFormation:boolean=false;
  showAddFormation(){
    this.formFormation = !this.formFormation;
  }

  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
  constructor(private translate:TranslateService,
    private Events:EventsService,
    private data:DataService,
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
  const formations = await this.data.get_Formation();
  this.formationGet = formations.data;
  this.formationId = formations.id;
  this.formationCredential = this.fb.group({
    titleFormation:['',[Validators.required,Validators.minLength(8)]],
    schoolFormation:['',[Validators.required,Validators.minLength(2)]],
    startDayFormation:['',[Validators.required]],
    endDayFormation:['',[Validators.required]],
    detailFormation:['',[Validators.required]],
    categorieFormation:['',[Validators.required]]
  })
  }
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

  get categorieFormation(){
    return this.formationCredential.get("categorieFormation");
  }
  async addFormation(){
    // console.log(this.formationCredential.value)
    this.data.set_Formation(this.formationCredential.value)
    this.formFormation = !this.formFormation;
    const toast = this.toast.create({
      message:"Change Successful",
      duration:3000,
      color:"success"
    });
    (await toast).present();
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


}
