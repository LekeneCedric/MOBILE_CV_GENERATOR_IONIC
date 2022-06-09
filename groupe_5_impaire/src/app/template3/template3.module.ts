import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Template3PageRoutingModule } from './template3-routing.module';

import { Template3Page } from './template3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Template3PageRoutingModule
  ],
  declarations: [Template3Page]
})
export class Template3PageModule {}
