import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplatePageRoutingModule } from './template-routing.module';

import { TemplatePage } from './template.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatePageRoutingModule
  ],
  declarations: [TemplatePage]
})
export class TemplatePageModule {}
