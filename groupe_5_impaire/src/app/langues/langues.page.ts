import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.page.html',
  styleUrls: ['./langues.page.scss'],
})
export class LanguesPage implements OnInit {
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  };
  formLanguage:boolean=false;
  showAddLanguage(){
    this.formLanguage = !this.formLanguage;
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
    const languages = await this.data.get_Languages();
  this.languageGet = languages.data;
  this.languageId = languages.id;
  this.languageCredential = this.fb.group({
    nameLanguage:['',[Validators.required,Validators.minLength(1)]],
    levelLanguage:['',[Validators.required]]
  })

  }
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
    const toast = this.toast.create({
      message:"Change Successful",
      duration:3000,
      color:"success"
    });
    (await toast).present();
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


}
