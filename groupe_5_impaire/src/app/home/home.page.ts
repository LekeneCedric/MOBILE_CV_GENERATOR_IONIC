import { Component } from '@angular/core';
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
  about:String ; 
  profession : String;
  // Experience Information
  expIntitule:String;
  expAnneeDebut:String;
  expAnneeFin:String;
  constructor(
    private data:DataService
  )
   { 
    
  }
async ngOnInit() {
 const dataPersonnel = this.data.get_personalInfo();
 dataPersonnel.then((dat)=>{
   this.name = String(dat.name);
   this.surname = String(dat.surname);
   this.about = String (dat.about);
   this.profession = String(dat.profession)
 });
 const dataFormation = this.data.get_formation();
 dataFormation.then((dat)=>{
   this.expIntitule = String(dat.intitule);
   this.expAnneeDebut = String(dat.date_debut);
   this.expAnneeFin = String(dat.date_fin)
 })
}}
