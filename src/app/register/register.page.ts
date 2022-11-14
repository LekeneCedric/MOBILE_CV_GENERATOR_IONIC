import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  [x: string]: any;
  credential : FormGroup;
  constructor( private fb:FormBuilder,private auth:Auth,private db:Firestore,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private authService:AuthService,
    private router : Router) { }


  get email(){
    return this.credential.get('email');
  }

  get password(){
    return this.credential.get('password');
  }
  get name (){
    return this.credential.get('name');
  }
  get surname (){
    return this.credential.get('surname');
  }
  get sex(){
    return this.credential.get('sex');
  }
  get age (){
    return this.credential.get('age');
  }
  get contact(){
    return this.credential.get('contact');
  }
  get profession(){
    return this.credential.get('profession')
  }
  get about(){
    return this.credential.get('about')
  }
  backLogin(){this.router.navigateByUrl('/login',{replaceUrl:true})}
  ngOnInit() {
    this.credential = this.fb.group({
      name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
      surname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(26)]],
      sex:['',[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
      age:['',[Validators.required,Validators.minLength(1),Validators.maxLength(3)]],
      contact:['+237',[Validators.required,Validators.minLength(13),Validators.maxLength(13)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      profession:['',[Validators.required,Validators.minLength(4)]],
      about:['',[Validators.required,Validators.minLength(50),Validators.maxLength(250)]]
    });
  }
  async register(){
    const loading = await this.loadingController.create();
    await loading.present();
    const user = this.authService.register(this.credential.value).then(
     async ()=>{
        const uuid = this.auth.currentUser.uid;
        console.log(uuid);
        const userData =this.credential.value;
        await setDoc(doc(this.db,"users",`${uuid}`),userData)
        this.router.navigateByUrl('',{replaceUrl:true});
        await loading.dismiss();
      }
      
    ).catch(()=>{
      console.log("Registration Failed","Please try Again");
    })
    
    }

}
