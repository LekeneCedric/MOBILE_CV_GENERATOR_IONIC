import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanprofilePageRoutingModule } from './scanprofile-routing.module';

import { ScanprofilePage } from './scanprofile.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { provideStorage } from '@angular/fire/storage';
import { getStorage } from 'firebase/storage';
import { DataqrcodeService } from '../dataqrcode.service';

@NgModule({
  imports: [
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ScanprofilePageRoutingModule,TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    }),
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore()),
    provideStorage(()=>getStorage()),
  ],
  declarations: [ScanprofilePage]
})
export class ScanprofilePageModule {}
