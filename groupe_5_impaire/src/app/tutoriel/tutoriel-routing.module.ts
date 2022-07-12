import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorielPage } from './tutoriel.page';

const routes: Routes = [
  {
    path: '',
    component: TutorielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorielPageRoutingModule {}
