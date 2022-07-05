import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DataStatisticService } from '../data-statistic.service';
import { DataService } from '../data.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.page.html',
  styleUrls: ['./comptes.page.scss'],
})
export class ComptesPage implements OnInit {
  formAccount:boolean=false;
  showAddAccount(){
    this.formAccount = !this.formAccount;
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
    private fb:FormBuilder,
    private toast:ToastController,
    private alertController:AlertController,
    private data:DataService,private statistic:DataStatisticService) {
    this.translate.setDefaultLang(this.translate.getBrowserLang());
    
    
    // Await language modification to change 
  this.Events.subscribe('lang',(data:string)=>{
    this.translate.setDefaultLang(data)
  });
   }

  async ngOnInit() {
    
    const account = await this.data.get_Accounts();
    // accountCredentialValidator
  this.accountCredential = this.fb.group({
    accountName:['',[Validators.required,Validators.maxLength(15)]],
    accountLink:['',[Validators.required,Validators.maxLength(100)]]
  })
  this.accountGet = account.data
  this.accountId = account.id;
  }
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
    const toast = this.toast.create({
      message:"Change Successful",
      duration:3000,
      color:"success"
    });
    (await toast).present();
    this.ngOnInit();
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

}
