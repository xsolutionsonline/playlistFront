import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPlaylistsPage } from './list-playlists.page';

const routes: Routes = [
  {
    path: 'user-tabs',
    component: ListPlaylistsPage,
    children: [
      {
        path: 'list-playlists',
        loadChildren: () => import('./components/play-list/play-list.module').then(m => m.PlayListPageModule)
      },
      {
        path: 'create-playlist',
        loadChildren: () => import('./components/create-play-list/create-play-list.module').then(m => m.CreatePlayListPageModule)
      },
      {
        path: '',
        redirectTo: '/user-tabs/list-playlists',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/user-tabs/list-playlists',
    pathMatch: 'full',
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPlaylistsPageRoutingModule {}
