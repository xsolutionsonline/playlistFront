import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePlayListPage } from './create-play-list.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePlayListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePlayListPageRoutingModule {}
