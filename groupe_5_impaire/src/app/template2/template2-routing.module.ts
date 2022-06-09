import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Template2Page } from './template2.page';

const routes: Routes = [
  {
    path: '',
    component: Template2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Template2PageRoutingModule {}
