import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayListPage } from './play-list.page';

const routes: Routes = [
  {
    path: '',
    component: PlayListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayListPageRoutingModule {}
