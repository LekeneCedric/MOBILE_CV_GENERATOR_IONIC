import { Component, OnInit } from '@angular/core';
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
  constructor( private fb:FormBuilder,
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
  backLogin(){this.router.navigateByUrl('/login',{replaceUrl:true})}
  ngOnInit() {
    this.credential = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  async register(){
    try{
      const loading = await this.loadingController.create();
      await loading.present();
      const user = this.authService.register(this.credential.value)
      await loading.dismiss();
      if(user){
      this.router.navigateByUrl('/home',{replaceUrl:true});
      } 
    }
    catch{
      this.showAlert("Registration Failed","Please try Again");
    }
    
    
  }

}
