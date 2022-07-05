import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivertissementsPageRoutingModule } from './divertissements-routing.module';

import { DivertissementsPage } from './divertissements.page';
import { TranslateConfigService } from '../translate-config.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
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
    DivertissementsPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [DivertissementsPage]
})
export class DivertissementsPageModule {}
