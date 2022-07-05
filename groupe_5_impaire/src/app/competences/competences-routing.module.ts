import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetencesPage } from './competences.page';

const routes: Routes = [
  {
    path: '',
    component: CompetencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetencesPageRoutingModule {}
