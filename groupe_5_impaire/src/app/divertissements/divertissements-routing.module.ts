import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivertissementsPage } from './divertissements.page';

const routes: Routes = [
  {
    path: '',
    component: DivertissementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivertissementsPageRoutingModule {}
