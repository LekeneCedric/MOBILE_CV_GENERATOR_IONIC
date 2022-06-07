import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { DataService } from '../data.service';
import { competence, compte, experience, formation, langue, loisir } from './home.module';

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
  contact2:String;
  email:String;
  email2:String;
  about:String ; 
  profession : String;
  adout:String;
  birthDay:Date;
  birthPlace:Date;
  formations : formation [];
  experiences : experience [];
  competences : competence [];
  langues : langue[];
  comptes: compte [];
  loisirs : loisir [];
  constructor(
    private data:DataService,
    private auth:Auth,
    private db : Firestore
  )
   { 
    
  }
async ngOnInit() {
  await setDoc(doc(this.db,"test","testId"),{
    testArray2:["hey", "css"]
  })
  const test = await getDoc(doc(this.db,"test","testId"))
  
  console.log(`First Element is : ${test.data().testArray2[0]}`)
  
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
