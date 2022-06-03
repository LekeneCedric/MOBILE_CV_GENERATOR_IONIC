import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { onSnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:Firestore,private auth:Auth) { }

  async get_personalInfo()
  {
    const currentId = this.auth.currentUser.uid;
    const docRef = doc(this.db,"users",`${currentId}`);
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
  }
  async get_formation(){
    const docRef = doc(this.db,"user","defaultUser","experience","experience_id");
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
  }
  
}
