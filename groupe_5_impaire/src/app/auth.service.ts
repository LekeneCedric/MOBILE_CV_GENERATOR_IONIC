import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collection ,doc, getDoc} from '@angular/fire/firestore';
import { Firestore } from 'firebase/firestore';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private auth:Auth) {}
  async register ({email,password}){
    try {
      const user = createUserWithEmailAndPassword(this.auth,
        email,
        password);
        return user;
    } catch (error) {
      return null;
    }
     }
  async login({email,password}){
    try {
      const user = signInWithEmailAndPassword(this.auth,
        email,
        password);
        return user;
    } catch (error) {
      return null;
    }
  }
  logout(){
    return signOut(this.auth);
  }
}
