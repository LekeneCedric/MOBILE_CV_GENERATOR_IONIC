import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { onSnapshot,collection } from '@angular/fire/firestore';
import { Firestore, getFirestore } from 'firebase/firestore';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class DataStatisticService {

  constructor(private Events:EventsService) { }

 getCountInformation():number{
    let count = 0 ; 
    const auth = getAuth()
    onSnapshot(collection(getFirestore(), 'usersCV',`${auth.currentUser.uid}`,'accounts'),(querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        count+=1;
      });
    });
    console.log(count)
   return count;
  }
  async getCountFormation(){
    await onSnapshot(collection(getFirestore(), 'usersCV', `${getAuth().currentUser.uid}`, 'formations'),(querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.Events.publish('countFormation',querySnapshot.size.valueOf())
      });
    });
  }
  async getCountAccount(){
    await onSnapshot(collection(getFirestore(), 'usersCV', `${getAuth().currentUser.uid}`, 'accounts'),(querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.Events.publish('countCompte',querySnapshot.size.valueOf())
      });
    }); 
  }
  async getCountExperience(){
    await onSnapshot(collection(getFirestore(), 'usersCV', `${getAuth().currentUser.uid}`, 'experiences'),(querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.Events.publish('countExperience',querySnapshot.size.valueOf())
      });
    }); 
  }
  async getCountCompetence(){
    await onSnapshot(collection(getFirestore(), 'usersCV', `${getAuth().currentUser.uid}`, 'competences'),(querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.Events.publish('countCompetence',querySnapshot.size.valueOf())
      });
    }); 
  }
  async getCountLanguage(){
    await onSnapshot(collection(getFirestore(), 'usersCV', `${getAuth().currentUser.uid}`, 'languages'),(querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.Events.publish('countLanguage',querySnapshot.size.valueOf())
      });
    }); 
  }
  async getCountHobbies(){
    await onSnapshot(collection(getFirestore(), 'usersCV', `${getAuth().currentUser.uid}`, 'hobbies'),(querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.Events.publish('countHobbie',querySnapshot.size.valueOf())
      });
    }); 
  }
}
