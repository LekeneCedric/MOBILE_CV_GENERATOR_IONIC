import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, doc, Firestore, getDoc, getDocs, setDoc } from '@angular/fire/firestore';
import { onSnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  constructor(private db:Firestore,private auth:Auth) { }
  
  async ngOnInit(){
      
  }
  async get_personalInfo()
  {
    const docRef = doc(this.db,"users",`${this.auth.currentUser.uid}`);
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
// Get User Formation 
  }
  async get_Formation(){
    let formations :any []=[];
    const querySnapshot = await getDocs(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'formations'));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    formations.push(doc.data())
  });
  // console.log(`Formations : ${formations}`)
  return formations
  console.log("Formation Added Successfully")
  }
  // Get User account information
async get_Accounts(){
  let accounts :any []=[];
  const querySnapshot = await getDocs(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'accounts'));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  accounts.push(doc.data())
});
return accounts;
}
// Get User Experience
async get_Experience(){
  let experiences :any []=[];
  const querySnapshot = await getDocs(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'experiences'));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  experiences.push(doc.data())
});
return experiences;
}
// Get User Competences 
async get_Competences(){
  let comptences :any []=[];
  const querySnapshot = await getDocs(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'competences'));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  comptences.push(doc.data())
});
console.log(`comptences : ${comptences}`)
}
// Get User Language(s)
async get_Languages(){
  let languages :any []=[];
  const querySnapshot = await getDocs(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'languages'));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  languages.push(doc.data())
});
console.log(`languages : ${languages}`)
}
// Get User Hobbies
async get_Hobbies(){
  let hobbies :any []=[];
  const querySnapshot = await getDocs(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'hobbies'));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  hobbies.push(doc.data())
});
console.log(`hobbies : ${hobbies}`)
}
// Set user formation
async set_Formation({titleFormation, schoolFormation, startDayFormation,endDayFormation,detailFormation}){
const newFormation = {
  titleFormation:titleFormation,schoolFormation:schoolFormation,startDayFormation:startDayFormation,endDayFormation:endDayFormation,detailFormation:detailFormation
}
await addDoc(collection(this.db,'usersCV',`${this.auth.currentUser.uid}`,'formations'),newFormation);
}
  // Set user account
async set_Account({accountName,accountLink}){
  // console.log(`accountName : ${accountName} , Link : ${accountLink}`)
  const newAccount = {accountName:accountName,accountLink:accountLink};
  await addDoc(collection(this.db,'usersCV',`${this.auth.currentUser.uid}`,'accounts'),newAccount);
  console.log("Account added Successfully")
  
}    
//  Set user experience
async set_Experience({titleExperience, structureExperience, startDayExperience,endDayExperience,detailExperience}){
  const newExperience = {titleExperience:titleExperience,structureExperience:structureExperience,startDayExperience:startDayExperience,endDayExperience:endDayExperience,detailsExperience:detailExperience};
  await addDoc(collection(this.db,'usersCV',`${this.auth.currentUser.uid}`,'experiences'),newExperience);
}

// Set user competence
async set_Competence(name:string,level:number){
const newCompetence = {name:name,level:level};
await addDoc(collection(this.db,'usersCV',`${this.auth.currentUser.uid}`,'competences'),newCompetence);
}

// Set user Language 
async set_Language(name:string,level:string){
const newLanguage = {name:name , level:level};
await addDoc(collection(this.db,'usersCV',`${this.auth.currentUser.uid}`,'languages'),newLanguage);
}

// Set Hobbies
async set_Hobbies(name:String){
  const newHobbies = {name:name};
  await addDoc(collection(this.db,'usersCV',`${this.auth.currentUser.uid}`,'hobbies'),newHobbies);
}
}
