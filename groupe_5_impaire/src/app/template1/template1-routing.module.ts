import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Template1Page } from './template1.page';

const routes: Routes = [
  {
    path: '',
    component: Template1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Template1PageRoutingModule {}
