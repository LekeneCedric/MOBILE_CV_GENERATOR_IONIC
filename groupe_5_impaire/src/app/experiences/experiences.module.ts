import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencesPageRoutingModule } from './experiences-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ExperiencesPage } from './experiences.page';
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
    ExperiencesPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [ExperiencesPage]
})
export class ExperiencesPageModule {}
