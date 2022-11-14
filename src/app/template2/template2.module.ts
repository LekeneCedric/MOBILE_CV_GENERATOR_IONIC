import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Template2PageRoutingModule } from './template2-routing.module';

import { Template2Page } from './template2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Template2PageRoutingModule
  ],
  declarations: [Template2Page]
})
export class Template2PageModule {}
