import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPlaylistsPageRoutingModule } from './list-playlists-routing.module';

import { ListPlaylistsPage } from './list-playlists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPlaylistsPageRoutingModule
  ],
  declarations: [ListPlaylistsPage]
})
export class ListPlaylistsPageModule {}
