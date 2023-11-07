import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayListPageRoutingModule } from './play-list-routing.module';

import { PlayListPage } from './play-list.page';
import { PlaylistSongsModaComponent } from '../playlist-songs-moda/playlist-songs-moda.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayListPageRoutingModule
  ],
  declarations: [PlayListPage,PlaylistSongsModaComponent]
})
export class PlayListPageModule {}
