import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptesPageRoutingModule } from './comptes-routing.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ComptesPage } from './comptes.page';
import { LanguageLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    ComptesPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [ComptesPage]
})
export class ComptesPageModule {}
