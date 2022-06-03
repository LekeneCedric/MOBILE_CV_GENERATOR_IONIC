import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credential : FormGroup;
  constructor(
    private fb:FormBuilder,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private authService:AuthService,
    private router : Router
  ) { }

  get email(){
    return this.credential.get('email');
  }

  get password(){
    return this.credential.get('password');
  }

  async showAlert(header: string,message: string){
    const alert = await this.alertController.create({
      header,message,buttons:['OK']
    });
    await alert.present()
  } 
  ngOnInit() {
    this.credential = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  async register(){
    
      const loading = await this.loadingController.create();
      await loading.present();
      this.authService.register(this.credential.value).then(
        ()=>{
          this.router.navigateByUrl('/home',{replaceUrl:true});
        }
      ).catch(()=>{
        this.showAlert("Registration Failed","Please try Again");
      })
      await loading.dismiss();
  }
  async login(){
    
      const loading = await this.loadingController.create();
      await loading.present();
      this.authService.login(this.credential.value).then(
       ()=>{
          console.log("User different de null"); 
         this.router.navigateByUrl('/home',{replaceUrl:true});
       }  
      ).catch(()=>{
        this.showAlert("Connexion Failed","Please try Again");
      })

      await loading.dismiss();
      
  }
  
}
