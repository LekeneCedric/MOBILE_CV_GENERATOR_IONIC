import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguesPage } from './langues.page';

const routes: Routes = [
  {
    path: '',
    component: LanguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguesPageRoutingModule {}
