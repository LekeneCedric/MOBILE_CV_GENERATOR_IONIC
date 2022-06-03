import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Personal Information 
  name :String ; 
  surname : String ; 
  age:number;
  sex : string;
  contact:String;
  email:String;
  about:String ; 
  profession : String;
  constructor(
    private data:DataService,
    private auth:Auth
  )
   { 
    
  }
async ngOnInit() {
  console.log(`Current User ID : ${this.auth.currentUser.uid}=== current User Email : ${this.auth.currentUser.email}`)
 const dataPersonnel = this.data.get_personalInfo();
 dataPersonnel.then((dat)=>{
   this.name = String(dat.name);
   this.surname = String(dat.surname);
   this.age = Number(dat.age);
   this.sex = dat.sex
   this.about = String (dat.about);
   this.contact = String(dat.contact);
   this.profession = String(dat.profession);
 });
 const dataFormation = this.data.get_formation();
 
}}
