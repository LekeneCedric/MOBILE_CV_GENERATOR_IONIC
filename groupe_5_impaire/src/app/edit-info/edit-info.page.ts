import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {
  name :String ; 
  surname : String ; 
  about:String ; 
  profession : String;
  constructor(
    private data:DataService
  )
   { 
    
  }
async ngOnInit() {
 const data = this.data.get_personalInfo();
 data.then((dat)=>{
   this.name = String(dat.name);
   this.surname = String(dat.surname);
   this.about = String (dat.about);
   this.profession = String(dat.profession)
 })
 
    // const docRef = doc(this.db, "user","defaultUser","education");
    // const docSnap =  getDoc(docRef);
    
    // if ((await docSnap).exists()) {
    //   console.log("Document data:", (await docSnap).data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  }

}
