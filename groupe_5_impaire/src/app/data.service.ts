import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { onSnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:Firestore) { }

  async get_personalInfo()
  {
    const docRef = onSnapshot( doc(this.db, "user","defaultUser","personal_info","personal_info_id"),(doc)=>{
    console.log(doc.data())
    });
  }
  
}
