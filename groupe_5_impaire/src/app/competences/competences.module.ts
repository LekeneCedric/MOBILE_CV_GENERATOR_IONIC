import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetencesPageRoutingModule } from './competences-routing.module';

import { TranslateConfigService } from '../translate-config.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { CompetencesPage } from './competences.page';

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
    CompetencesPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [CompetencesPage]
})
export class CompetencesPageModule {}
