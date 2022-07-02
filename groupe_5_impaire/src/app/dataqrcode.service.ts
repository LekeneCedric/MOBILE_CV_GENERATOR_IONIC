import { Injectable, OnInit } from '@angular/core';
import { collection } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc, Firestore, getDoc, onSnapshot, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataqrcodeService implements OnInit {
  
  ngOnInit(): void {
      
  }
  constructor(private db:Firestore) { }
  async get_personalInfo(id:string)
  {
    const docRef = doc(this.db,"users",`${id}`);
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
// Get User Formation 
  }

  async get_Formation(id:string){
    let data :any []=[];
    let ids : any []= [];
    await onSnapshot(collection(this.db, 'usersCV', `${id}`, 'formations'),(querySnapshot)=>{
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
  return Formations;
  }
  
  // Get User account information
async get_Accounts(id:string){
  let data :any []=[];
  let ids : any []=[];
  
  await onSnapshot(collection(this.db, 'usersCV',`${id}`,'accounts'),(querySnapshot)=>{
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

// Get User Experience
async get_Experience(id:string){
  let data :any []=[];
  let ids : any []=[];
  await onSnapshot(collection(this.db, 'usersCV',`${id}`,'experiences'),(querySnapshot)=>{
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


// Get User Competences 
async get_Competences(id:string){
  let data :any []=[];
  let ids : any [] =[];
  onSnapshot(collection(this.db, 'usersCV',`${id}`,'competences'),(querySnapshot)=>{
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

// Get User Language(s)
async get_Languages(id:string){
  let data :any []=[];
  let ids : any [] =[];
  onSnapshot(collection(this.db, 'usersCV',`${id}`,'languages'),(querySnapshot)=>{
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


// Get User Hobbies
async get_Hobbies(id:string){ 
  let data :any []=[];
  let ids : any [] =[];
  onSnapshot(collection(this.db, 'usersCV',`${id}`,'hobbies'),(querySnapshot)=>{
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

}
