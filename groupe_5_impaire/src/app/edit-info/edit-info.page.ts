import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {

  items:Observable<any[]>;
  constructor(
    public db:Firestore
  )
   { 
    
  }
  hey():void{
    console.log("Hey")
  }
async ngOnInit() {
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
