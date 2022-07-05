import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-divertissements',
  templateUrl: './divertissements.page.html',
  styleUrls: ['./divertissements.page.scss'],
})
export class DivertissementsPage implements OnInit {

  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
  formHobbie:boolean=false;
  showAddHobbie(){
    this.formHobbie = !this.formHobbie;
  } 
  constructor(private data:DataService,
    private translate:TranslateService,
    private Events:EventsService,
    private alertController:AlertController,
    private toast:ToastController,
    private fb:FormBuilder) {
      this.translate.setDefaultLang(this.translate.getBrowserLang());
    
    
      // Await language modification to change 
    this.Events.subscribe('lang',(data:string)=>{
      this.translate.setDefaultLang(data)
    });
     }

  async ngOnInit() {
    const hobbies = await this.data.get_Hobbies();
  this.hobbieGet = hobbies.data;
  this.hobbieId  = hobbies.id;
  this.hobbieCredential = this.fb.group({
    nameHobbie:['',[Validators.required]]
  })
  }
  hobbieGet:any[];
  hobbieId:any[]
  hobbieCredential:FormGroup;

  get nameHobbie(){
    return this.hobbieCredential.get("nameHobbie")
  }
  async addHobbie(){
    this.data.set_Hobbies(this.hobbieCredential.value);
    this.formHobbie = !this.formHobbie;
    const toast = this.toast.create({
      message:"Change Successful",
      duration:3000,
      color:"success"
    });
    (await toast).present();
    this.ngOnInit();
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
