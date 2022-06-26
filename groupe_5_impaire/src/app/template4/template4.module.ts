import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Template4PageRoutingModule } from './template4-routing.module';

import { Template4Page } from './template4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Template4PageRoutingModule
  ],
  declarations: [Template4Page]
})
export class Template4PageModule {}
