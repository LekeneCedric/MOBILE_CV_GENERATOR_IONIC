import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanprofilePage } from './scanprofile.page';

const routes: Routes = [
  {
    path: '',
    component: ScanprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanprofilePageRoutingModule {}
