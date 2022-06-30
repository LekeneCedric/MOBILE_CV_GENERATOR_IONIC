import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// Import IONIC STEPPER MODULE 
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {provideAuth,getAuth} from "@angular/fire/auth";
import {provideFirestore,getFirestore, Firestore} from "@angular/fire/firestore";
import {provideStorage,getStorage} from "@angular/fire/storage";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { RegisterPipe } from './register.pipe';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './translate-config.service';
import { HomePage } from './home/home.page';



const firebaseConfig = {
  apiKey: "AIzaSyCdDp2GVBrhVqzNL9xzWDt0zAf85GBs2IY",
  authDomain: "cvgeneratorprojectionicangular.firebaseapp.com",
  projectId: "cvgeneratorprojectionicangular",
  storageBucket: "cvgeneratorprojectionicangular.appspot.com",
  messagingSenderId: "303756872232",
  appId: "1:303756872232:web:7bdd2f58f3125e3b4a831d",
  measurementId: "G-WQDGVQPS8D"
};
export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],  
  declarations: [AppComponent, RegisterPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    }),
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [PDFGenerator,{ provide: RouteReuseStrategy,useClass: IonicRouteStrategy },TranslateConfigService],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
