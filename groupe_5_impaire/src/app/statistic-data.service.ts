import { Injectable } from '@angular/core';
import { onSnapshot,collection, query, where } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class StatisticDataService {

  constructor() { 
    
  }
  getCompetenceInfo(...req){
    let data :any []=[];
  let ids : any [] =[];
 const q= query(collection(getFirestore(), 'usersCV',`${getAuth().currentUser.uid}`,
 'competences'),where ("categorieCompetence","==",`${req[0]}`));
 const unsubscribe = onSnapshot(q,(querySnapshot)=>{
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data());
    ids.push(doc.id);
  });
}); 
 
 const Competences = {
  id : ids, 
  data : data
 };
 return Competences;
  }
  getExperienceInfo(...req){
    let data :any []=[];
  let ids : any [] =[];
 const q= query(collection(getFirestore(), 'usersCV',`${getAuth().currentUser.uid}`,
 'experiences'),where ("categorieExperience","==",`${req[0]}`),);
 const unsubscribe = onSnapshot(q,(querySnapshot)=>{
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data());
    ids.push(doc.id);
  });
}); 
 
 const Competences = {
  id : ids, 
  data : data
 };
 return Competences;
  }

  getFormationInfo(req)
  {
    let data :any []=[];
    let ids : any [] =[];
   const q= query(collection(getFirestore(), 'usersCV',`${getAuth().currentUser.uid}`,
   'formations'),where ("categorieFormation","==",`${req}`));
   const unsubscribe = onSnapshot(q,(querySnapshot)=>{
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());
      ids.push(doc.id);
    });
  }); 
   
   const Competences = {
    id : ids, 
    data : data
   };
   return Competences;
  }
}
