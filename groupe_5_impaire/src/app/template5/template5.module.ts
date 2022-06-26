import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Template5PageRoutingModule } from './template5-routing.module';

import { Template5Page } from './template5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Template5PageRoutingModule
  ],
  declarations: [Template5Page]
})
export class Template5PageModule {}
