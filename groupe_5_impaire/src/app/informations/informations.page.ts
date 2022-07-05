import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AvatarService } from '../avatar.service';
import { DataService } from '../data.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage implements OnInit {
  name :string ; 
  age:number;
  contact:number;
  email:string;
  surname : string ; 
  about:string ; 
  profession : string;
  profile = null ;

  formPersonalInfo:boolean=false;
  showEditPersonalInfo(){
    this.formPersonalInfo = !this.formPersonalInfo;
  }
  constructor(private translate:TranslateService,
    private Events:EventsService,
    private avatarService:AvatarService,
    private data:DataService,
    private fb:FormBuilder,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private toast:ToastController) {
    this.translate.setDefaultLang(this.translate.getBrowserLang());
    
    
    // Await language modification to change 
  this.Events.subscribe('lang',(data:string)=>{
    this.translate.setDefaultLang(data)
   })
  
  }
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
  async ngOnInit() {
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile = data;
     });

     const dataPersonnel = this.data.get_personalInfo();
     await dataPersonnel.then((dat)=>{
      this.about = String (dat.about);
      this.age = dat.age;
      this.contact = dat.contact;
      this.email = dat.email;
      this.name = String(dat.name);
      this.surname = String(dat.surname);
      this.profession = String(dat.profession);
    });
     this.personalCredential = this.fb.group({
      about:[`${this.about}`,[Validators.required,Validators.minLength(15)]],
      age:[`${this.age}`,[Validators.required]],
      contact:[`${this.contact}`,[Validators.required]],
      email:[`${this.email}`,[Validators.required,Validators.email]],
      name:[`${this.name}`,[Validators.required,Validators.maxLength(25)]],
      profession:[`${this.profession}`,[Validators.required]],
      surname:[`${this.surname}`,[Validators.required,Validators.maxLength(25)]] 
     })
  }
  async changeImage(){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing:true,
      resultType:CameraResultType.Base64,
      source:CameraSource.Photos,
    });
    console.log(image);
    if(image){
      const loading = await this.loadingController.create();
      await loading.present();
      const result = await this.avatarService.uploadImage(image);
      loading.dismiss();
    if(!result){
      const alert = await this.alertController.create({
        header:"Upload failed",
        message: "A problem occur while loading the avatar",
        buttons:['ok'],
      });
      await alert.present();
    }
    }
  }

  async updateAccount(){
    this.formPersonalInfo = !this.formPersonalInfo;
    this.data.update_personalInfo(this.personalCredential.value);
    const toast = this.toast.create({
      message:"Change Successful",
      duration:3000,
      color:"success"
    });
    (await toast).present();
    this.ngOnInit();
   }
  personalCredential:FormGroup;
 get nameC(){return this.personalCredential.get("name");}
 get ageC(){return this.personalCredential.get("age");}
 get contactC(){return this.personalCredential.get("contact");}
 get aboutC(){return this.personalCredential.get("about");}
 get emailC(){return this.personalCredential.get("email");}
 get professionC(){return this.personalCredential.get("profession");}
 get surnameC(){return this.personalCredential.get("surname");}



}
