import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaisPage } from './programais.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaisPageRoutingModule {}
