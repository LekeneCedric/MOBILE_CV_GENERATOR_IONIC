import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Template4Page } from './template4.page';

const routes: Routes = [
  {
    path: '',
    component: Template4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Template4PageRoutingModule {}
