import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, doc, Firestore, getDoc, getDocs, setDoc } from '@angular/fire/firestore';
import { deleteDoc, onSnapshot } from 'firebase/firestore';

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
    let data :any []=[];
    let ids : any []= [];
    await onSnapshot(collection(this.db, 'usersCV', `${this.auth.currentUser.uid}`, 'formations'),(querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.data());
        ids.push(doc.id);
      });
    });
  const Formations = {
   id:ids,
   data:data
  }
  // console.log(`Formations : ${formations}`)
  return Formations
  }
  async del_Formation(id:string){
    await deleteDoc(doc(this.db,'usersCV',`${this.auth.currentUser.uid}`,'formations',`${id}`));
  console.log("Formation remove succesfully");
  }
  // Get User account information
async get_Accounts(){
  let data :any []=[];
  let ids : any []=[];
  
  await onSnapshot(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'accounts'),(querySnapshot)=>{
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      ids.push(doc.id)
      data.push(doc.data())
    });
  });
const Accounts = {
  id:ids,
  data:data
}
return Accounts;
}

// Delete user Account information 
async del_Account(id:string)
{
  await deleteDoc(doc(this.db,'usersCV',`${this.auth.currentUser.uid}`,'accounts',`${id}`));
  console.log("Account remove succesfully");
}
// Get User Experience
async get_Experience(){
  let data :any []=[];
  let ids : any []=[];
  await onSnapshot(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'experiences'),(querySnapshot)=>{
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());
      ids.push(doc.id);
    });})
    const Experiences = {
      id : ids ,
      data : data
    }
return Experiences;
}

async del_Experience(id:string){
  await deleteDoc(doc(this.db,'usersCV',`${this.auth.currentUser.uid}`,'experiences',`${id}`));
  console.log("Experience remove succesfully");
}
// Get User Competences 
async get_Competences(){
  let data :any []=[];
  let ids : any [] =[];
  onSnapshot(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'competences'),(querySnapshot)=>{
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
async del_Competence(id:string){
  await deleteDoc(doc(this.db,'usersCV',`${this.auth.currentUser.uid}`,'competences',`${id}`));
  console.log("Competence remove succesfully");
}
// Get User Language(s)
async get_Languages(){
  let data :any []=[];
  let ids : any [] =[];
  onSnapshot(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'languages'),(querySnapshot)=>{
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      ids.push(doc.id);
      data.push(doc.data())
    });
  });
const Languages = {
  id : ids , 
  data : data
}

return Languages;
}

async del_Language(id:string)
{
  await deleteDoc(doc(this.db,'usersCV',`${this.auth.currentUser.uid}`,'languages',`${id}`));
  console.log("Language remove succesfully");
}
// Get User Hobbies
async get_Hobbies(){ 
  let data :any []=[];
  let ids : any [] =[];
  onSnapshot(collection(this.db, 'usersCV',`${this.auth.currentUser.uid}`,'hobbies'),(querySnapshot)=>{
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());
      ids.push(doc.id)
    });
  });
  const Hobbies = {
    data : data,
    id : ids
  }
return Hobbies;
}
async del_Hobbies(id:string){
  await deleteDoc(doc(this.db,'usersCV',`${this.auth.currentUser.uid}`,'hobbies',`${id}`));
  console.log("Experience remove succesfully");
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
async set_Competence({nameCompetence,levelCompetence}){
const newCompetence = {nameCompetence:nameCompetence,levelCompetence:levelCompetence};
await addDoc(collection(this.db,'usersCV',`${this.auth.currentUser.uid}`,'competences'),newCompetence);
}

// Set user Language 
async set_Language({nameLanguage,levelLanguage}){
const newLanguage = {nameLanguage:nameLanguage , levelLanguage:levelLanguage};
await addDoc(collection(this.db,'usersCV',`${this.auth.currentUser.uid}`,'languages'),newLanguage);
}

// Set Hobbies
async set_Hobbies({nameHobbie}){
  const newHobbies = {nameHobbie:nameHobbie};
  await addDoc(collection(this.db,'usersCV',`${this.auth.currentUser.uid}`,'hobbies'),newHobbies);
}
}
