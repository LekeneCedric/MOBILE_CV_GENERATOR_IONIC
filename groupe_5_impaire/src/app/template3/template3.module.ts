import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Template3PageRoutingModule } from './template3-routing.module';

import { Template3Page } from './template3.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Template3PageRoutingModule
  ],
  declarations: [Template3Page]
})
export class Template3PageModule {}
