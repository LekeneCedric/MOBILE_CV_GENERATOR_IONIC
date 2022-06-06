import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// Import IONIC STEPPER MODULE 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {provideAuth,getAuth} from "@angular/fire/auth";
import {provideFirestore,getFirestore, Firestore} from "@angular/fire/firestore";
import {provideStorage,getStorage} from "@angular/fire/storage";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { RegisterPipe } from './register.pipe';
const firebaseConfig = {
  apiKey: "AIzaSyCdDp2GVBrhVqzNL9xzWDt0zAf85GBs2IY",
  authDomain: "cvgeneratorprojectionicangular.firebaseapp.com",
  projectId: "cvgeneratorprojectionicangular",
  storageBucket: "cvgeneratorprojectionicangular.appspot.com",
  messagingSenderId: "303756872232",
  appId: "1:303756872232:web:7bdd2f58f3125e3b4a831d",
  measurementId: "G-WQDGVQPS8D"
};
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],  
  declarations: [AppComponent, RegisterPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: RouteReuseStrategy,useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
