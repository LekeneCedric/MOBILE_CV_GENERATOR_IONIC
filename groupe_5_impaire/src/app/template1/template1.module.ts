import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Template1PageRoutingModule } from './template1-routing.module';

import { Template1Page } from './template1.page';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    NgxQRCodeModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Template1PageRoutingModule,FormsModule
  ],
  declarations: [Template1Page],providers:[PDFGenerator]
})
export class Template1PageModule {}
