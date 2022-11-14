import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Template3Page } from './template3.page';

const routes: Routes = [
  {
    path: '',
    component: Template3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Template3PageRoutingModule {}
