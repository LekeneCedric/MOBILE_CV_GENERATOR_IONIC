import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { docData, Firestore } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { doc, setDoc } from 'firebase/firestore';
import {Photo} from '@capacitor/camera';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(
    private auth:Auth,
    private firestore:Firestore,
    private storage:Storage
  ) { }

  getUserProfile() {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore,`profileImg/${user.uid}`);
    return docData(userDocRef);
  }

  async uploadImage(cameraFile:Photo){
    const user = this.auth.currentUser;
    const path = `uploads/${user.uid}/profile.png`;
    const storageRef = ref(this.storage,path);

    try {
     await uploadString(storageRef,cameraFile.base64String,'base64');
     const imageUrl = await getDownloadURL(storageRef);
     const userDocRef = doc(this.firestore,`profileImg/${user.uid}`);
     await setDoc(userDocRef,{
      imageUrl,
     });
     console.log("image enregistree");
     return true;
    }catch(e){
        return null ;
    }

  }
}
