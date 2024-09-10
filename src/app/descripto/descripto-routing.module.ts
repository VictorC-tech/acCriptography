import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptoPage } from './descripto.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptoPageRoutingModule {}
