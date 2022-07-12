import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorielPageRoutingModule } from './tutoriel-routing.module';

import { TutorielPage } from './tutoriel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorielPageRoutingModule
  ],
  declarations: [TutorielPage]
})
export class TutorielPageModule {}
