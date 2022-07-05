import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationsPage } from './formations.page';

const routes: Routes = [
  {
    path: '',
    component: FormationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationsPageRoutingModule {}
