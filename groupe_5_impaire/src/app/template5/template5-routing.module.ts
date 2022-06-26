import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Template5Page } from './template5.page';

const routes: Routes = [
  {
    path: '',
    component: Template5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Template5PageRoutingModule {}
